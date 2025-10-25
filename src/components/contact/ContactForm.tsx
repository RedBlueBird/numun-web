"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.contact.form.name.label} <span className="text-red-500">{t.contact.form.required}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-numun-gold focus:outline-none transition-colors"
            placeholder={t.contact.form.name.placeholder}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.contact.form.email.label} <span className="text-red-500">{t.contact.form.required}</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-numun-gold focus:outline-none transition-colors"
            placeholder={t.contact.form.email.placeholder}
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.contact.form.subject.label} <span className="text-red-500">{t.contact.form.required}</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-numun-gold focus:outline-none transition-colors bg-white"
          >
            <option value="">{t.contact.form.subject.placeholder}</option>
            <option value="general">{t.contact.form.subject.options.general}</option>
            <option value="sponsorship">{t.contact.form.subject.options.sponsorship}</option>
            <option value="delegate">{t.contact.form.subject.options.delegate}</option>
            <option value="committee">{t.contact.form.subject.options.committee}</option>
            <option value="volunteer">{t.contact.form.subject.options.volunteer}</option>
            <option value="other">{t.contact.form.subject.options.other}</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.contact.form.message.label} <span className="text-red-500">{t.contact.form.required}</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-numun-gold focus:outline-none transition-colors resize-none"
            placeholder={t.contact.form.message.placeholder}
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-numun-gold hover:bg-numun-gold-dark text-white font-bold rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {t.contact.form.success}
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {t.contact.form.error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
