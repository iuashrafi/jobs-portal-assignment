"use server";

import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { CreateJobSchemaDto } from "@/lib/types";
import { revalidatePath } from "next/cache";

// endpoint to get dashboard data - only the No of jobs count, and total candidates applied are important
// other metrics in "company/jobs" page is dummy
export async function getDashboardData() {
  try {
    const [jobsListingCount, applicationsCount] = await Promise.all([
      await db.job.count(),
      await db.application.count(),
    ]);
    return {
      jobsListingCount,
      applicationsCount,
      shortlistedCount: 0,
    };
  } catch (error) {
    console.log("Error occurred while fetching dashboard data:", error);
    return {
      jobsListingCount: 0,
      applicationsCount: 0,
      shortlistedCount: 0,
    };
  }
}

// endpoint to get all applications related to a particular job id
export async function getApplicationsForJobId(jobId: number) {
  return await db.application.findMany({
    where: {
      jobId,
    },
  });
}

// endpoint to get all jobs, these data are shown in "/candidate/jobs" page
export async function getAllJobsForCompany(
  searchQuery?: string,
  category?: string,
  minSalary?: number,
  maxSalary?: number
) {
  return await db.job.findMany({
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
    orderBy: {
      createdAt: "asc",
    },
  });
}

// endpoint to create a job by the company(note : we are not handling any Auth)
export async function createJob(data: CreateJobSchemaDto) {
  try {
    const { title, description, category, company, location, salary } = data;
    await db.job.create({
      data: { title, description, category, company, location, salary },
    });
    revalidatePath("/company/jobs");
    revalidatePath(`/`, "layout");
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

// endpoint to update a job
export async function editJob(data: CreateJobSchemaDto) {
  try {
    const { id, title, description, category, company, location, salary } =
      data;

    if (!id) return { success: false, errorMessage: "Job id does not exists." };

    await db.job.update({
      data: { title, description, category, company, location, salary },
      where: {
        id,
      },
    });

    revalidatePath(`/company/jobs/[id]/edit`);
    revalidatePath(`/company/jobs`);
    revalidatePath(`/`, "layout");

    return { success: true, successMessage: "Job updated successfully." };
  } catch (error) {
    console.log("Error updating job:", error);
    return {
      success: false,
      errorMessage: "Failed to update job.",
    };
  }
}

// endpoint to delete a job
export async function deleteJob(id: number) {
  try {
    await db.job.delete({
      where: { id },
    });
    revalidatePath(`/`, "layout");
    return {
      success: true,
      successMessage: "Job deleted successfully.",
    };
  } catch (error) {
    console.log("Error deleting a job:", error);
    return {
      success: false,
      errorMessage: "Failed to delete job.",
    };
  }
}
