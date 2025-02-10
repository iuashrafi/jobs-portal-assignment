"use server";

import { db } from "@/lib/db";
import { JobApplicationSchemaDto } from "@/lib/types";

export async function createJobApplication(data: JobApplicationSchemaDto) {
  const { jobId, name, email, resumeLink: resume, coverLetter } = data;

  const application = await db.application.create({
    data: {
      jobId,
      name,
      email,
      resume,
      coverLetter,
    },
  });

  console.log("Application success = ", application);

  return application;
}

export async function getJobById(id: number) {
  return await db.job.findUnique({
    where: { id },
  });
}
