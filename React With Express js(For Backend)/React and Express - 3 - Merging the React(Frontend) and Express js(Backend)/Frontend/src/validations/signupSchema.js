// Frontend/src/validations/signupSchema.js
import { z } from "zod";

// This mirrors your Express schema
export const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, { message: "Name is required" }) // 🔁 catch empty string
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name too long" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(1, { message: "Email is required" }) // ✅ catch empty string
    .email({ message: "Invalid email address" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(1, { message: "Password is required" }) // ✅ catch empty string
    .min(8, { message: "Password must be at least 8 characters" })
    .max(10, { message: "Password too long" }),
});

// import { z } from "zod";

// const userSchema = z.object({
//   // 1️⃣ Trim + Transform (lowercase) for email
//   email: z
//     .string()
//     .trim()
//     .email({ message: "Invalid email" })
//     .transform((val) => val.toLowerCase()),

//   // 2️⃣ Coerce string to number and check range
//   age: z.coerce
//     .number()
//     .int()
//     .min(18, { message: "You must be at least 18 years old" }),

//   // 3️⃣ Optional field with max limit
//   bio: z.string().max(160, "Bio too long").optional(),

//   // 4️⃣ Default value if missing
//   isActive: z.boolean().default(false),

//   // 5️⃣ Enum: role must be one of these
//   role: z.enum(["admin", "user", "guest"]),

//   // 6️⃣ Union: contact can be email or 10-digit number
//   contact: z.union([
//     z.string().email("Invalid email format"),
//     z.string().regex(/^\d{10}$/, "Must be a 10-digit phone number"),
//   ]),

//   // 7️⃣ Nested object: address with city and zip
//   address: z.object({
//     city: z.string(),
//     zip: z.string().length(6, "ZIP must be 6 characters"),
//   }),

//   // 8️⃣ Array: tags must be at least 1
//   tags: z.array(z.string()).min(1, "At least one tag is required"),

//   // 9️⃣ Password fields with refinement
//   password: z.string().min(8, "Password must be at least 8 characters"),
//   confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters"),
// }).refine((data) => data.password === data.confirmPassword, {
//   path: ["confirmPassword"],
//   message: "Passwords do not match",
// });
