"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateJobSchema, CreateJobSchemaDto } from "@/lib/types";
import FormFieldWrapper from "@/components/custom-forms/FormFieldWrapper";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "@/app/actions/jobs";

const CreateJobForm = () => {
  const form = useForm<CreateJobSchemaDto>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });

  async function onSubmit(values: CreateJobSchemaDto) {
    console.log("values= ", values);
    const job = await createJob(values);
    if (!job) {
      console.log("Error creating a job");
    }

    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFieldWrapper
          name="title"
          label="Job Title"
          placeholder="Title"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />
        <FormFieldWrapper
          name="category"
          label="Category"
          placeholder="Category Name"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />
        <FormFieldWrapper
          name="description"
          label="Job Description"
          placeholder="Job Description"
          control={form.control}
          renderInput={(field) => <Textarea {...field} />}
        />
        <Button type="submit">Create Job</Button>
      </form>
    </Form>
  );
};
export default CreateJobForm;
