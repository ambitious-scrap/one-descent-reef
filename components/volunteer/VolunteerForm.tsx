"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  volunteerSchema,
  type VolunteerValues,
  participationModes,
  interests,
  availabilities,
} from "@/lib/validation/volunteer";
import { describedBy, FieldError } from "@/components/forms/Field";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState<VolunteerValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VolunteerValues>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data: VolunteerValues) => {
    // Demonstration only — no network request.
    setSubmitted(data);
  };

  if (submitted) {
    const firstName = submitted.fullName.trim().split(/\s+/)[0];
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-green/40 bg-deep/40 p-6"
      >
        <h3 className="font-serif text-2xl">Thank you, {firstName}.</h3>
        <p className="mt-3 font-sans text-paper/90">
          Your interest has been recorded in this demonstration. Nothing was
          sent or stored — a real deployment would route it to the REEF
          volunteer team, who would follow up about next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(null);
          }}
          className="mt-6 min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      aria-describedby="volunteer-form-note"
    >
      <p id="volunteer-form-note" className="font-sans text-sm text-paper/70">
        Fields marked required must be completed. This is a demonstration form —
        submitting records your answers locally and sends nothing.
      </p>

      {/* Full name */}
      <div>
        <label htmlFor="fullName" className="field-label">
          Full name <span aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className="field-control"
          aria-required="true"
          aria-invalid={errors.fullName ? "true" : undefined}
          aria-describedby={describedBy([
            errors.fullName && "fullName-error",
          ])}
          {...register("fullName")}
        />
        <FieldError id="fullName-error" message={errors.fullName?.message} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="field-label">
          Email address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="field-control"
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={describedBy([
            "email-help",
            errors.email && "email-error",
          ])}
          {...register("email")}
        />
        <p id="email-help" className="field-help">
          Used only to arrange your first activity.
        </p>
        <FieldError id="email-error" message={errors.email?.message} />
      </div>

      {/* Country / region */}
      <div>
        <label htmlFor="country" className="field-label">
          Country or region <span aria-hidden="true">*</span>
        </label>
        <input
          id="country"
          type="text"
          autoComplete="country-name"
          className="field-control"
          aria-required="true"
          aria-invalid={errors.country ? "true" : undefined}
          aria-describedby={describedBy([errors.country && "country-error"])}
          {...register("country")}
        />
        <FieldError id="country-error" message={errors.country?.message} />
      </div>

      {/* Participation mode — native radio group */}
      <fieldset
        aria-required="true"
        aria-invalid={errors.participationMode ? "true" : undefined}
        aria-describedby={describedBy([
          errors.participationMode && "participationMode-error",
        ])}
      >
        <legend className="field-label">
          Participation mode <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {participationModes.map((mode) => (
            <label key={mode.value} className="choice-row">
              <input
                type="radio"
                value={mode.value}
                {...register("participationMode")}
              />
              <span>{mode.label}</span>
            </label>
          ))}
        </div>
        <FieldError
          id="participationMode-error"
          message={errors.participationMode?.message}
        />
      </fieldset>

      {/* Primary interest — native select */}
      <div>
        <label htmlFor="interest" className="field-label">
          Primary interest <span aria-hidden="true">*</span>
        </label>
        <select
          id="interest"
          defaultValue=""
          className="field-control"
          aria-required="true"
          aria-invalid={errors.interest ? "true" : undefined}
          aria-describedby={describedBy([errors.interest && "interest-error"])}
          {...register("interest")}
        >
          <option value="" disabled>
            Choose an area
          </option>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
        <FieldError id="interest-error" message={errors.interest?.message} />
      </div>

      {/* Availability — native select */}
      <div>
        <label htmlFor="availability" className="field-label">
          Availability <span aria-hidden="true">*</span>
        </label>
        <select
          id="availability"
          defaultValue=""
          className="field-control"
          aria-required="true"
          aria-invalid={errors.availability ? "true" : undefined}
          aria-describedby={describedBy([
            errors.availability && "availability-error",
          ])}
          {...register("availability")}
        >
          <option value="" disabled>
            Choose your availability
          </option>
          {availabilities.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
        <FieldError
          id="availability-error"
          message={errors.availability?.message}
        />
      </div>

      {/* Motivation */}
      <div>
        <label htmlFor="motivation" className="field-label">
          What draws you to this work? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="motivation"
          rows={4}
          className="field-control"
          aria-required="true"
          aria-invalid={errors.motivation ? "true" : undefined}
          aria-describedby={describedBy([
            "motivation-help",
            errors.motivation && "motivation-error",
          ])}
          {...register("motivation")}
        />
        <p id="motivation-help" className="field-help">
          A sentence or two is plenty (20–600 characters).
        </p>
        <FieldError id="motivation-error" message={errors.motivation?.message} />
      </div>

      {/* Experience — optional */}
      <div>
        <label htmlFor="experience" className="field-label">
          Relevant experience or skills{" "}
          <span className="font-normal text-paper/60">(optional)</span>
        </label>
        <textarea
          id="experience"
          rows={3}
          className="field-control"
          aria-invalid={errors.experience ? "true" : undefined}
          aria-describedby={describedBy([
            "experience-help",
            errors.experience && "experience-error",
          ])}
          {...register("experience")}
        />
        <p id="experience-help" className="field-help">
          Certifications, data skills, teaching, boating — or leave this blank.
        </p>
        <FieldError id="experience-error" message={errors.experience?.message} />
      </div>

      {/* Consent */}
      <div>
        <label className="choice-row items-start">
          <input
            type="checkbox"
            className="mt-1"
            aria-required="true"
            aria-invalid={errors.consent ? "true" : undefined}
            aria-describedby={describedBy([errors.consent && "consent-error"])}
            {...register("consent")}
          />
          <span>
            I give REEF permission to contact me about volunteering.{" "}
            <span aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      <button
        type="submit"
        className="min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
      >
        Register interest
      </button>

      <p className="font-sans text-sm text-paper/60">
        Prefer to give financially?{" "}
        <Link href="/support" className="text-gold underline underline-offset-4">
          See the support flow
        </Link>
        .
      </p>
    </form>
  );
}
