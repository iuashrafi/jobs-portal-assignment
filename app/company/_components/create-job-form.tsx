"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateJobSchema, CreateJobSchemaDto } from "@/lib/types";
import FormFieldWrapper from "@/components/custom-forms/FormFieldWrapper";
import { Textarea } from "@/components/ui/textarea";
import { createJob, editJob } from "@/app/actions/jobs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobCategory } from "@/lib/enum";
import toast from "react-hot-toast";

interface CreateJobSchemaProps {
  initialData?: {
    id: number | null;
    title: string;
    description: string;
    category: JobCategory;
    company: string;
    location: string;
    salary: number;
  };
}

const CreateJobForm = ({ initialData }: CreateJobSchemaProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateJobSchemaDto>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: initialData ?? {
      id: null,
      title: "",
      description: "",
      category: JobCategory.SOFTWARE_ENGINEERING,
      company: "",
      location: "",
      salary: 0,
    },
  });

  async function onSubmit(values: CreateJobSchemaDto) {
    startTransition(async () => {
      if (values.id) {
        const res = await editJob(values); 
        if (res.success) {
          toast.success(res.successMessage, {
            position: "bottom-center",
          });
          router.push(`/company/jobs/${values.id}/edit`);
        } else
          toast.error(res.errorMessage, {
            position: "bottom-center",
          });
      } else {
        const res = await createJob(values);
        if (res.success)
          toast.success(res.successMessage, {
            position: "bottom-center",
          });
        else
          toast.error(res.errorMessage, {
            position: "bottom-center",
          });

        router.push("/company/jobs");
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFieldWrapper
          name="title"
          label="Job Title"
          placeholder="Title - Software Engineer"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />
        <FormFieldWrapper
          name="company"
          label="Company Name"
          placeholder="Company Name - Amazon"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />
        <FormFieldWrapper
          name="location"
          label="Company Location"
          placeholder="Company Location - Bangalore"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />
        <FormFieldWrapper
          name="category"
          label="Category"
          placeholder="Category Name"
          control={form.control}
          renderInput={(field) => (
            <Select {...field}>
              <SelectTrigger>
                <SelectValue placeholder="Select a Job Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={JobCategory.SOFTWARE_ENGINEERING}>
                  Software Engineering
                </SelectItem>
                <SelectItem value={JobCategory.DATA_SCIENCE}>
                  Data Science
                </SelectItem>
                <SelectItem value={JobCategory.DESIGN}>Design</SelectItem>
                <SelectItem value={JobCategory.MARKETING}>Marketing</SelectItem>
                <SelectItem value={JobCategory.PRODUCT_MANAGEMENT}>
                  Product Management
                </SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <FormFieldWrapper
          name="salary"
          label="Salary in Lpa"
          placeholder="Salary - 6 lpa"
          control={form.control}
          renderInput={(field) => <Input {...field} type="number" />}
        />

        <FormFieldWrapper
          name="description"
          label="Job Description"
          placeholder="Job Description"
          control={form.control}
          renderInput={(field) => <Textarea {...field} />}
        />
        <Button type="submit" size={"lg"} variant={"primary"}>
          {initialData ? "Update Job" : "Create Job"}
        </Button>
      </form>
    </Form>
  );
};
export default CreateJobForm;
