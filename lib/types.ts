import { z } from "zod";
import { Icon, IconProps } from "@tabler/icons-react";
import { RefAttributes } from "react";
import { JobCategory } from "./enum";

/**
 * Schema for Forms
 */

export const CreateJobSchema = z.object({
  id: z.number().nullable(),
  title: z.string().min(2).max(50),
  category: z.nativeEnum(JobCategory),
  description: z.string().min(10).max(3000),
  company: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  salary: z.coerce.number().int().gte(0),
});

export type CreateJobSchemaDto = z.infer<typeof CreateJobSchema>;

/*
A basic application form to submit candidate details (name, email, resume link, cover letter).
*/
export const JobApplicationSchema = z.object({
  jobId: z.string().transform(Number),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  resumeLink: z.string().url(),
  coverLetter: z.string().min(10).max(1000),
});

export type JobApplicationSchemaDto = z.infer<typeof JobApplicationSchema>;

/**
 * General Types
 */

export type NavLinkType = {
  id: string;
  label: string;
  href: string;
  Icon?: React.ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};
