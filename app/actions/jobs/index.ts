"use server";

import { db } from "@/lib/db";
import { CreateJobSchemaDto } from "@/lib/types";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createJob(data: CreateJobSchemaDto) {
  try {
    const { title, description, category, company, location, salary } = data;
    const job = await db.job.create({
      data: { title, description, category, company, location, salary },
    });
    revalidatePath("/company/jobs");
    return {
      success: true,
      successMessage: "Job created successfully.",
    };
  } catch (error) {
    console.log("Error creating Job:", error);
    return {
      success: false,
      errorMessage: "Failed to create job.",
    };
  }
}

export async function editJob(data: CreateJobSchemaDto) {
  try {
    const { id, title, description, category, company, location, salary } =
      data;

    if (!id) return { success: false, errorMessage: "Job id does not exists." };

    const job = await db.job.update({
      data: { title, description, category, company, location, salary },
      where: {
        id,
      },
    });

    if (job) {
      revalidatePath(`/company/jobs/${id}/edit`);
      return { success: true, successMessage: "Job updated successfully." };
    } else {
      return {
        success: false,
        errorMessage: "Failed to update job.",
      };
    }
  } catch (error) {
    console.log("Error updating job:", error);
    return {
      success: false,
      errorMessage: "Failed to update job.",
    };
  }
}

export async function deleteJob(id: number) {
  try {
    const job = await db.job.delete({
      where: { id },
    });
    if (job) {
      return {
        success: true,
        successMessage: "Job deleted successfully.",
      };
    } else {
      return {
        success: false,
        errorMessage: "Failed to delete job.",
      };
    }
  } catch (error) {
    console.log("Error deleting a job:", error);
    return {
      success: false,
      errorMessage: "Failed to delete job.",
    };
  }
}

export async function getAllJobs(
  searchQuery?: string,
  category?: string,
  minSalary?: number,
  maxSalary?: number,
  pageNo: number = 1,
  pageLimit: number = 10
) {
  const skip = (pageNo - 1) * pageLimit;

  const jobs = await db.job.findMany({
    where: {
      AND: [
        searchQuery
          ? {
              title: {
                contains: searchQuery,
                mode: "insensitive",
              },
            }
          : {},
        category
          ? {
              category: category as Prisma.EnumJobCategoryFilter,
            }
          : {},
        minSalary !== undefined || maxSalary !== undefined
          ? {
              salary: {
                gte: minSalary ?? 0,
                lte: maxSalary ?? Number.MAX_SAFE_INTEGER,
              },
            }
          : {},
      ],
    },
    skip,
    take: pageLimit,
  });

  const totalJobs = await db.job.count({
    where: {
      AND: [
        searchQuery
          ? {
              title: {
                contains: searchQuery,
                mode: "insensitive",
              },
            }
          : {},
        category
          ? {
              category: category as Prisma.EnumJobCategoryFilter,
            }
          : {},
        minSalary !== undefined || maxSalary !== undefined
          ? {
              salary: {
                gte: minSalary ?? 0,
                lte: maxSalary ?? Number.MAX_SAFE_INTEGER,
              },
            }
          : {},
      ],
    },
  });

  return {
    jobs,
    totalPages: Math.ceil(totalJobs / pageLimit),
    currentPage: pageNo,
  };
}
