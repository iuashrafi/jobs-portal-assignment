import { z } from "zod";

export const CreateJobSchema = z.object({
  title: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  description: z.string(),
});

export type CreateJobSchemaDto = z.infer<typeof CreateJobSchema>;
