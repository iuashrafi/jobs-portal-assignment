"use client";

import { createJobApplication } from "@/app/actions/candidate";
import FormFieldWrapper from "@/components/custom-forms/FormFieldWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JobApplicationSchema, JobApplicationSchemaDto } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const JobApplicationForm = ({ jobId }: { jobId: number }) => {
  const form = useForm<JobApplicationSchemaDto>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      jobId,
      name: "",
      email: "",
      resumeLink: "",
      coverLetter: "",
    },
  });

  async function onSubmit(values: JobApplicationSchemaDto) {
    const res = await createJobApplication(values);
    if (res.success) {
      toast.success(res.successMessage, {
        position: "bottom-center",
      });
      form.reset();
    } else {
      toast.error(res.errorMessage, { position: "bottom-center" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFieldWrapper
          name="name"
          label="Candidate Name"
          placeholder="Candidate Name"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />

        <FormFieldWrapper
          name="email"
          label="Candidate Email"
          placeholder="Candidate Email"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />

        <FormFieldWrapper
          name="resumeLink"
          label="Resume Link"
          placeholder="Resume Link"
          control={form.control}
          renderInput={(field) => <Input {...field} type="text" />}
        />

        <FormFieldWrapper
          name="coverLetter"
          label="Cover Letter"
          placeholder="Cover Letter"
          control={form.control}
          renderInput={(field) => <Textarea {...field} />}
        />

        <Button type="submit" variant={"primary"}>
          Apply
        </Button>
      </form>
    </Form>
  );
};

export default JobApplicationForm;
