"use server";

import { db } from "@/lib/db";
import { CreateJobSchemaDto } from "@/lib/types";
import { Prisma } from "@prisma/client";

export async function createJob(data: CreateJobSchemaDto) {
  const { title, description, category, company, location, salary } = data;
  const job = await db.job.create({
    data: { title, description, category, company, location, salary },
  });
  console.log("job created =", job);
  return job;
}

export async function editJob(data: CreateJobSchemaDto) {
  const { id, title, description, category, company, location, salary } = data;

  let job = null;

  if (!id) return job;

  job = await db.job.update({
    data: { title, description, category, company, location, salary },
    where: {
      id,
    },
  });

  return job;
}

export async function deleteJob(id: number) {
  const job = await db.job.delete({
    where: { id },
  });
  return job;
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
