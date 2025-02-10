"use server";

import { CreateJobSchemaDto } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createJob(data: CreateJobSchemaDto) {
  const { title, description, category } = data;
  const job = await prisma.job.create({
    data: { title, description, category },
  });
  console.log("job created =", job);
  return job;
}

export async function getAllJobs() {
  return await prisma.job.findMany();
}
