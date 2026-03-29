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

// Vendor registration schema
export const vendorRegisterSchema = z
  .object({
    // Personal info
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.email('Invalid email address'),
    password: passwordSchema,
    confirmPassword: z.string(),
    // Store info
    storeName: z.string().min(3, 'Store name must be at least 3 characters'),
    storeDescription: z.string().optional(),
    contactPhone: z.string().optional(),
    countryCode: z.string().optional().default('IN'),
    address: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export type VendorRegisterInput = z.infer<typeof vendorRegisterSchema>;
