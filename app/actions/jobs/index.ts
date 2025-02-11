"use server";

import { db } from "@/lib/db";
import { CreateJobSchemaDto } from "@/lib/types";

export async function createJob(data: CreateJobSchemaDto) {
  const { title, description, category } = data;
  const job = await db.job.create({
    data: { title, description, category },
  });
  console.log("job created =", job);
  return job;
}

export async function editJob(data: CreateJobSchemaDto) {
  const { id, title, description, category } = data;

  let job = null;

  if (!id) return job;

  job = await db.job.update({
    data: { title, description, category },
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

export async function getAllJobs(searchQuery?: string) {
  return await db.job.findMany({
    where: searchQuery
      ? {
          title: {
            contains: searchQuery,
            mode: "insensitive",
          },
        }
      : {},
  });
}
