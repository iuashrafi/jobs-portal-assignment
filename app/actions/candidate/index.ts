"use server";

import { db } from "@/lib/db";
import { JobApplicationSchemaDto } from "@/lib/types";
import { Prisma } from "@prisma/client";

// endpoint to create job application
export async function createJobApplication(data: JobApplicationSchemaDto) {
  try {
    const { jobId, name, email, resumeLink: resume, coverLetter } = data;

    await db.application.create({
      data: {
        jobId,
        name,
        email,
        resume,
        coverLetter,
      },
    });

    return {
      success: true,
      successMessage: "Applied successfully.",
    };
  } catch (error) {
    console.log("Error applying for job:", error);
    return {
      success: false,
      errorMessage: "Error applying for job.",
    };
  }
}

export async function getJobById(id: number) {
  return await db.job.findUnique({
    where: { id },
  });
}

// endpoint to get all jobs in 'candidate/jobs' page
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
    orderBy: {
      createdAt: "asc",
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
    orderBy: {
      createdAt: "asc",
    },
  });

  return {
    jobs,
    totalPages: Math.ceil(totalJobs / pageLimit),
    currentPage: pageNo,
  };
}
