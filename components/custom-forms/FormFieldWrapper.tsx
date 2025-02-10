import { ReactNode } from "react";
import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface FormFieldWrapperProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control<any>;
  renderInput: (field: any) => ReactNode; // Pass a function that returns the input component
}

const FormFieldWrapper = ({
  name,
  label,
  placeholder,
  control,
  renderInput,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInput({ ...field, placeholder })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWrapper;
