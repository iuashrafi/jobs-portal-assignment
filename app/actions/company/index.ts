"use server";

import { db } from "@/lib/db";

export async function getApplicationsForJobId(jobId: number) {
  return await db.application.findMany({
    where: {
      jobId,
    },
  });
}
