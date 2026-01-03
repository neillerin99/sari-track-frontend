import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import type React from "react";
import { useState } from "react";
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
  isPassword?: boolean;
}

export default function InputField<TFormValues extends FieldValues>({
  label,
  id,
  icon,
  type = "text",
  placeholder,
  register,
  error,
  isPassword = false,
}: InputFieldProps<TFormValues>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  type = isPassword ? (showPassword ? "text" : "password") : type;
  return (
    <div className="flex flex-col w-full">
      <Label className="text-sm" htmlFor={String(id)}>
        {label}
      </Label>
      <div className="relative mt-2 mb-2 flex">
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
        {isPassword && (
          <Button
            className="absolute top-0 right-0 cursor-pointer"
            size={"icon"}
            variant={"ghost"}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="text-gray-500" />
            ) : (
              <Eye className="text-gray-500" />
            )}
          </Button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs flex gap-1 items-center">
          <CircleAlert size={15} />
          {error.message}
        </p>
      )}
    </div>
  );
}
