import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, CircleAlert, X } from "lucide-react";
import { useEffect, useState } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface FileUploadFieldProps<TFormValues extends FieldValues> {
  watch: UseFormWatch<TFormValues>;
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  setValue: UseFormSetValue<TFormValues>;
  id: Path<TFormValues>;
}

export default function FileUploadField<TFormValues extends FieldValues>({
  watch,
  register,
  error,
  setValue,
  id,
}: FileUploadFieldProps<TFormValues>) {
  const profileFiles = watch(id);
  const profile = profileFiles?.[0];
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!profile) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(profile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [profile]);

  function clearAvatar() {
    setPreview(null);
    setValue(
      id,
      undefined as unknown as PathValue<TFormValues, Path<TFormValues>>
    );
  }

  return (
    <div className="mx-auto flex items-center flex-col gap-3">
      <p className="text-gray-500 text-xs">Profile (Optional)</p>
      {preview ? (
        <div className="relative p-4">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 rounded-full border-3 border-dashed border-blue-300 dark:border-blue-700 flex flex-col items-center justify-center  transition-colors bg-blue-50 dark:bg-gray-700 object-cover"
          />
          <Button
            className="absolute top-0 right-0  rounded-full cursor-pointer hover:bg-red-500"
            size={"icon"}
            variant={"ghost"}
            onClick={() => clearAvatar()}
            type="button"
          >
            <X />
          </Button>
        </div>
      ) : (
        <>
          <label
            htmlFor="profile"
            className="w-32 h-32 rounded-full border-3 border-dashed border-blue-300 dark:border-blue-700 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-blue-50 dark:bg-gray-700"
          >
            <Camera className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-2" />
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Upload Photo
            </span>
          </label>
          <Input
            id="profile"
            type="file"
            accept="image/*"
            className="hidden"
            {...register(id)}
          />
        </>
      )}
      {error && (
        <p className="text-red-500 text-xs flex gap-1 items-center">
          <CircleAlert size={15} />
          {error?.message}
        </p>
      )}
      <span className="text-xs text-gray-500">
        Max size: 5MB • PNG, JPG, GIF
      </span>
    </div>
  );
}
