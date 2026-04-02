"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";

const inputClass =
  "w-full bg-cream border border-border px-4 py-3 font-sans text-ink text-sm placeholder:text-ink-faint focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200";

const errorClass = "font-sans text-xs text-red-500 mt-1";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="bg-surface py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-4">
            CONTACT
          </p>
          <h2 className="font-serif text-ink text-3xl md:text-4xl mb-6">
            お問い合わせ
          </h2>
          <p className="font-sans text-ink-muted text-base leading-relaxed max-w-md mx-auto">
            まずは無料体験セッション（60分）からお気軽にどうぞ。
            <br className="hidden md:block" />
            フォームよりご連絡ください。
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        {/* Form or success state */}
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold"
                >
                  <path
                    d="M5 12L10 17L19 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-ink text-2xl mb-4">
                送信ありがとうございます
              </h3>
              <p className="font-sans text-ink-muted text-sm leading-relaxed">
                メッセージを受け取りました。
                <br />
                2〜3営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-sans text-ink-muted text-xs tracking-wider mb-2">
                  お名前 <span className="text-gold">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="山田 太郎"
                  className={inputClass}
                />
                {errors.name && (
                  <p className={errorClass}>{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-ink-muted text-xs tracking-wider mb-2">
                  メールアドレス <span className="text-gold">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="example@email.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-ink-muted text-xs tracking-wider mb-2">
                  メッセージ <span className="text-gold">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="ご質問・お申し込み内容をお気軽にご記入ください"
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[240px] block md:mx-auto bg-gold text-white font-sans font-medium text-sm tracking-wider px-10 py-4 hover:bg-gold-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
                <p className="text-center font-sans text-ink-faint text-xs mt-4">
                  個人情報は適切に管理いたします
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
