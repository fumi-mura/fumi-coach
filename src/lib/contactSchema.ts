import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(50, "お名前は50文字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("有効なメールアドレスを入力してください"),
  message: z
    .string()
    .min(10, "メッセージは10文字以上入力してください")
    .max(1000, "メッセージは1000文字以内で入力してください"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
