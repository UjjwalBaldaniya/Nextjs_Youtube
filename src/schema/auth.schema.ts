import { z } from "zod";

export const formSchema = z.object({
  emailOrUsername: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include at least one special character.",
    }),
});

export const signupSchema = z.object({
  fullName: z.string().min(2, {
    message: "FullName must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long." })
    .email({ message: "Please enter a valid email address." }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include at least one special character.",
    }),
  avatar: z.any(),
  coverImage: z.any(),
});
