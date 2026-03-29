import z from 'zod';

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(128, 'Password must be at most 128 characters')
  .refine((val) => /[A-Z]/.test(val), {
    message: 'Must contain at lease one uppercase letter',
  })
  .refine((val) => /[a-z]/.test(val), {
    message: 'Must contain at lease one lowercase letter',
  })
  .refine((val) => /\d/.test(val), {
    message: 'Must contain at lease one number',
  })
  .refine((val) => /[A-Za-z0-9]/.test(val), {
    message: 'Must contain at lease one special character',
  });

export const loginSchema = z.object({
  email: z.email('Invalid email'),
  password: passwordSchema,
  rememberMe: z.boolean().optional().default(true),
});

export const registerSchema = z
  .object({
    name: z.string().min(3, 'Name must be at lease 3 characters'),
    email: z.email('Invalid email'),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
