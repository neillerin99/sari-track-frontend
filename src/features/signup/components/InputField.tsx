import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import type React from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputFieldProps<TFormValues extends FieldValues> {
  label: string;
  id: Path<TFormValues>;
  icon?: React.ReactNode;
  register: UseFormRegister<TFormValues>;
  type?: string;
  placeholder: string;
  error?: FieldError;
}

export default function InputField<TFormValues extends FieldValues>({
  label,
  id,
  icon,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps<TFormValues>) {
  return (
    <div className="flex flex-col">
      <Label className="text-sm" htmlFor={String(id)}>
        {label}
      </Label>
      <div className="relative mt-4 mb-1 flex">
        {icon && (
          <div className="absolute top-0 left-2 h-full flex items-center">
            {icon}
          </div>
        )}
        <Input
          {...register(id)}
          id={String(id)}
          type={type}
          placeholder={placeholder}
          className="pl-9"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
