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

export async function getAllJobs() {
  return await db.job.findMany();
}
