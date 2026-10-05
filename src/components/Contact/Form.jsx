import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { CheckCircleIcon, ExclamationTriangleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Button from "../Global/Button";
import { profile } from "../../data/portfolio";

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
  </label>
);

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formData,
        { publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <CheckCircleIcon className="h-12 w-12 text-accent-500" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Message sent!</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll reply within a day or two.</p>
        <Button variant="outline" size="sm" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.user_name && "Please enter your name"}>
          <input
            type="text"
            autoComplete="name"
            className="input"
            placeholder="Jane Doe"
            {...register("user_name", { required: true })}
          />
        </Field>
        <Field label="Email" error={errors.user_email && "Please enter a valid email"}>
          <input
            type="email"
            autoComplete="email"
            className="input"
            placeholder="jane@company.com"
            {...register("user_email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message && "Please write a short message"}>
        <textarea
          rows={5}
          className="input resize-none"
          placeholder="Tell me about the role or project..."
          {...register("message", { required: true })}
        />
      </Field>

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
          <ExclamationTriangleIcon className="h-5 w-5 shrink-0" />
          <span>
            Something went wrong. Please email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
            .
          </span>
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send message"}
        <PaperAirplaneIcon className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
