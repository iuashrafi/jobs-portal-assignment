"use server";

import { db } from "@/lib/db";
import { JobApplicationSchemaDto } from "@/lib/types";

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
