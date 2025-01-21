import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { useForm } from "react-hook-form";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ACCESS_KEY = "acea1c09-a201-43b8-bdc5-d1648047b50d";

const FORM_SETTINGS = {
  from_name: "India Nagy Website",
  subject: "Website Contact Submission",
} as const;

const formValidation = {
  name: {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  message: {
    required: "Message is required",
    minLength: { value: 10, message: "Message must be at least 10 characters" },
  },
} as const;

type FormData = {
  name: string;
  email: string;
  message: string;
  botcheck?: boolean;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const { submit: submitToWeb3Forms } = useWeb3Forms({
    access_key: ACCESS_KEY,
    settings: FORM_SETTINGS,
    onSuccess: (msg) => {
      setSubmitStatus({ success: true, message: msg });
      reset();
    },
    onError: (msg) => {
      setSubmitStatus({ success: false, message: msg });
    },
  });

  const onSubmit = handleSubmit(submitToWeb3Forms);

  return (
    <div className="mt-10 max-w-[60ch]">
      <form onSubmit={onSubmit} className="space-y-6">
        <FormField label="Name" error={errors.name?.message}>
          <Input
            type="text"
            autoComplete="name"
            className={errors.name ? "border-red-500" : ""}
            {...register("name", formValidation.name)}
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message}>
          <Input
            type="email"
            autoComplete="email"
            className={errors.email ? "border-red-500" : ""}
            {...register("email", formValidation.email)}
          />
        </FormField>

        <FormField label="Message" error={errors.message?.message}>
          <Textarea
            rows={10}
            className={errors.message ? "border-red-500" : ""}
            {...register("message", formValidation.message)}
          />
        </FormField>

        <input type="checkbox" className="hidden" {...register("botcheck")} />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? <LoadingSpinner /> : "Send Message"}
        </Button>
      </form>

      {submitStatus.message && (
        <Alert
          className={`mt-4 ${submitStatus.success ? "bg-green-50" : "bg-red-50"}`}
        >
          <AlertDescription>{submitStatus.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

type FormFieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">
        <div className="mb-1 text-lg">{label}</div>
        {children}
        {error && <p className="!mt-1 text-sm text-red-500">{error}</p>}
      </label>
    </div>
  );
};

const LoadingSpinner = () => (
  <svg
    className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
