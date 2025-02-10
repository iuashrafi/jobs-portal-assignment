import { z } from "zod";

export const CreateJobSchema = z.object({
  title: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  description: z.string(),
});

export type CreateJobSchemaDto = z.infer<typeof CreateJobSchema>;

/*
A basic application form to submit candidate details (name, email, resume link, cover letter).
*/
export const JobApplicationSchema = z.object({
  jobId: z.string().transform(Number),
  name: z.string(),
  email: z.string().email(),
  resumeLink: z.string().url(),
  coverLetter: z.string(),
});

export type JobApplicationSchemaDto = z.infer<typeof JobApplicationSchema>;
