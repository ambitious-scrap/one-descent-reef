"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  supportSchema,
  type SupportValues,
  frequencies,
  suggestedAmounts,
  supportAreas,
  resolveAmount,
  formatINR,
  CUSTOM_MIN,
  CUSTOM_MAX,
} from "@/lib/validation/support";
import { describedBy, FieldError } from "@/components/forms/Field";

type Stage = "form" | "summary" | "done";

export function SupportFlow() {
  const [stage, setStage] = useState<Stage>("form");
  const [data, setData] = useState<SupportValues | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SupportValues>({
    resolver: zodResolver(supportSchema),
  });

  const isCustom =
    useWatch({ control, name: "amountPreset" }) === "custom";

  const onValid = (values: SupportValues) => {
    setData(values);
    setStage("summary");
  };

  const startAgain = () => {
    reset();
    setData(null);
    setStage("form");
  };

  if (stage === "summary" && data) {
    const area = supportAreas.find((a) => a.value === data.area);
    const freq = frequencies.find((f) => f.value === data.frequency);
    const hasDetails = Boolean(data.supporterName || data.supporterEmail);
    return (
      <div className="rounded-xl border border-white/10 bg-deep/40 p-6">
        <h3 className="font-serif text-2xl">Review your simulated support</h3>
        <dl className="mt-4 space-y-3 font-sans">
          <div className="flex justify-between gap-4">
            <dt className="text-paper/70">Frequency</dt>
            <dd className="font-semibold">{freq?.label}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-paper/70">Amount</dt>
            <dd className="font-semibold text-gold">
              {formatINR(resolveAmount(data))}
              {data.frequency === "monthly" ? " / month" : ""}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-paper/70">Area of support</dt>
            <dd className="font-semibold">{area?.label}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-paper/70">Supporter details</dt>
            <dd className="font-semibold">
              {hasDetails ? "Provided" : "Not provided"}
            </dd>
          </div>
        </dl>
        <p className="mt-4 rounded-md border border-amber/40 bg-abyss/50 p-3 font-sans text-sm text-paper/85">
          This is a demonstration. No payment will be processed and no financial
          details were collected.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStage("form")}
            className="min-h-11 rounded-md border border-white/25 px-6 py-3 font-sans font-semibold text-paper"
          >
            Go back and edit
          </button>
          <button
            type="button"
            onClick={() => setStage("done")}
            className="min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
          >
            Confirm simulated support
          </button>
        </div>
      </div>
    );
  }

  if (stage === "done" && data) {
    const area = supportAreas.find((a) => a.value === data.area);
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-green/40 bg-deep/40 p-6"
      >
        <h3 className="font-serif text-2xl">Simulated support confirmed</h3>
        <p className="mt-3 font-sans text-paper/90">
          Nothing was charged. In a real deployment, a{" "}
          {data.frequency === "monthly" ? "monthly" : "one-time"} contribution of{" "}
          <strong className="text-gold">
            {formatINR(resolveAmount(data))}
          </strong>{" "}
          toward <strong>{area?.label}</strong> would help demonstrate{" "}
          {area?.demonstrates}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/impact"
            className="min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
          >
            See the impact
          </Link>
          <Link
            href="/volunteer"
            className="min-h-11 rounded-md border border-white/25 px-6 py-3 font-sans font-semibold text-paper"
          >
            Volunteer instead
          </Link>
          <button
            type="button"
            onClick={startAgain}
            className="min-h-11 rounded-md border border-white/25 px-6 py-3 font-sans font-semibold text-paper"
          >
            Start again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid)}
      className="space-y-8"
      aria-describedby="support-form-note"
    >
      <p id="support-form-note" className="font-sans text-sm text-paper/70">
        Choose how you would contribute. This is a demonstration — no payment is
        taken and no card, bank, or UPI details are ever requested.
      </p>

      {/* Frequency */}
      <fieldset
        aria-required="true"
        aria-invalid={errors.frequency ? "true" : undefined}
        aria-describedby={describedBy([errors.frequency && "frequency-error"])}
      >
        <legend className="field-label">Frequency</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {frequencies.map((f) => (
            <label key={f.value} className="choice-row">
              <input type="radio" value={f.value} {...register("frequency")} />
              <span>{f.label}</span>
            </label>
          ))}
        </div>
        <FieldError id="frequency-error" message={errors.frequency?.message} />
      </fieldset>

      {/* Amount */}
      <fieldset
        aria-required="true"
        aria-invalid={errors.amountPreset ? "true" : undefined}
        aria-describedby={describedBy([
          errors.amountPreset && "amountPreset-error",
        ])}
      >
        <legend className="field-label">Contribution amount</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {suggestedAmounts.map((amt) => (
            <label key={amt} className="choice-row">
              <input
                type="radio"
                value={String(amt)}
                {...register("amountPreset")}
              />
              <span>{formatINR(amt)}</span>
            </label>
          ))}
          <label className="choice-row">
            <input type="radio" value="custom" {...register("amountPreset")} />
            <span>Custom amount</span>
          </label>
        </div>
        <FieldError
          id="amountPreset-error"
          message={errors.amountPreset?.message}
        />

        {isCustom && (
          <div className="mt-3">
            <label htmlFor="customAmount" className="field-label">
              Custom amount (₹)
            </label>
            <input
              id="customAmount"
              type="number"
              inputMode="numeric"
              min={CUSTOM_MIN}
              max={CUSTOM_MAX}
              step={1}
              className="field-control"
              aria-invalid={errors.customAmount ? "true" : undefined}
              aria-describedby={describedBy([
                "customAmount-help",
                errors.customAmount && "customAmount-error",
              ])}
              {...register("customAmount", { valueAsNumber: true })}
            />
            <p id="customAmount-help" className="field-help">
              Whole rupees, from {formatINR(CUSTOM_MIN)} to{" "}
              {formatINR(CUSTOM_MAX)}.
            </p>
            <FieldError
              id="customAmount-error"
              message={errors.customAmount?.message}
            />
          </div>
        )}
      </fieldset>

      {/* Area */}
      <fieldset
        aria-required="true"
        aria-invalid={errors.area ? "true" : undefined}
        aria-describedby={describedBy([errors.area && "area-error"])}
      >
        <legend className="field-label">Area of support</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {supportAreas.map((a) => (
            <label key={a.value} className="choice-row">
              <input type="radio" value={a.value} {...register("area")} />
              <span>{a.label}</span>
            </label>
          ))}
        </div>
        <FieldError id="area-error" message={errors.area?.message} />
      </fieldset>

      {/* Optional supporter details */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="supporterName" className="field-label">
            Your name{" "}
            <span className="font-normal text-paper/60">(optional)</span>
          </label>
          <input
            id="supporterName"
            type="text"
            autoComplete="name"
            className="field-control"
            aria-invalid={errors.supporterName ? "true" : undefined}
            aria-describedby={describedBy([
              errors.supporterName && "supporterName-error",
            ])}
            {...register("supporterName")}
          />
          <FieldError
            id="supporterName-error"
            message={errors.supporterName?.message}
          />
        </div>
        <div>
          <label htmlFor="supporterEmail" className="field-label">
            Your email{" "}
            <span className="font-normal text-paper/60">(optional)</span>
          </label>
          <input
            id="supporterEmail"
            type="email"
            autoComplete="email"
            className="field-control"
            aria-invalid={errors.supporterEmail ? "true" : undefined}
            aria-describedby={describedBy([
              errors.supporterEmail && "supporterEmail-error",
            ])}
            {...register("supporterEmail")}
          />
          <FieldError
            id="supporterEmail-error"
            message={errors.supporterEmail?.message}
          />
        </div>
      </div>

      {/* Acknowledgement */}
      <div>
        <label className="choice-row items-start">
          <input
            type="checkbox"
            className="mt-1"
            aria-required="true"
            aria-invalid={errors.acknowledge ? "true" : undefined}
            aria-describedby={describedBy([
              errors.acknowledge && "acknowledge-error",
            ])}
            {...register("acknowledge")}
          />
          <span>
            I understand this is a simulated demonstration and no payment will be
            processed. <span aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError
          id="acknowledge-error"
          message={errors.acknowledge?.message}
        />
      </div>

      <button
        type="submit"
        className="min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
      >
        Review support
      </button>
    </form>
  );
}
