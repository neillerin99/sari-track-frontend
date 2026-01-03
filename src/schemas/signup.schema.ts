import { z } from "zod";

export const signupSchema = z.object({
    email: z.email({ message: "Please enter a valid email address" }),
    firstName: z
        .string()
        .min(1, { message: "Firstname is required" })
        .regex(/^[A-Za-z\- ]+$/, {
            message: "Contains invalid characters",
        })
        .trim()
        .transform((val) => val.charAt(0).toUpperCase() + val.slice(1)),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .regex(/^[A-Za-z\- ]+$/, {
            message: "Contains invalid characters",
        })
        .trim()
        .transform((val) => val.charAt(0).toUpperCase() + val.slice(1)),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/[A-Z]/, {
            message: "Password must include at least 1 uppercase letter",
        })
        .regex(/[a-z]/, {
            message: "Password must include at least 1 lowercase letter",
        })
        .regex(/[0-9]/, { message: "Password must include at least 1 number" })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must include at least 1 special character",
        }),
    confirmPassword: z.string().min(1, { message: "Confirm your password" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    error: 'Passwords do not match'
});

export type SignupFormFields = z.infer<typeof signupSchema>;
