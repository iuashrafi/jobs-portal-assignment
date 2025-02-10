"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createJob(
  title: string,
  description: string,
  category: string
) {
  const job = await prisma.job.create({
    data: { title, description, category },
  });
  return job;
}

export async function getAllJobs() {
  return await prisma.job.findMany();
}
