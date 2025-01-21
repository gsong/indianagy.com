import type { FieldError } from "react-hook-form";

import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const accessKey = "acea1c09-a201-43b8-bdc5-d1648047b50d";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().max(255, "Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "India's Website",
      subject: "Website Contact Submission",
    },
    onSuccess: (msg, data) => {
      console.debug({ msg, data });
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      console.debug({ msg, data });
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="mt-10 max-w-[60ch]">
        <Field label="Name" error={errors.name as FieldError}>
          <Input
            type="text"
            autoComplete="name"
            required
            className={errors.name ? errorBorder : undefined}
            {...register("name")}
          />
        </Field>

        <Field label="Email" error={errors.email as FieldError}>
          <Input
            type="email"
            autoComplete="email"
            className={errors.email ? errorBorder : undefined}
            {...register("email")}
          />
        </Field>

        <Field label="Message" error={errors.message as FieldError}>
          <Textarea
            rows={10}
            className={errors.message ? errorBorder : undefined}
            {...register("message")}
          />
        </Field>

        <input
          type="checkbox"
          id=""
          className="hidden"
          {...register("botcheck")}
        />

        <Button className="mt-5" disabled={isSubmitting}>
          {isSubmitting ? (
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
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-2 text-lg text-green-700">
          {message || "Success. Message sent successfully"}
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-2 text-lg text-red-700">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
};

interface FieldProps extends React.PropsWithChildren {
  label: string;
  error: FieldError;
}

const Field = ({ label, error, children }: FieldProps) => (
  <div className="mt-5">
    <label>
      <div className="mb-1">{label}</div>
      {children}
      {error ? <Error message={error.message as string} /> : null}
    </label>
  </div>
);

const Error = ({ message }: { message: string }) => (
  <div className="mt-1 text-red-600">
    <small>{message}</small>
  </div>
);

const errorBorder =
  "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0";
