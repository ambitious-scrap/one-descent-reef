import { z } from "zod";

export const frequencies = [
  { value: "one-time", label: "One-time" },
  { value: "monthly", label: "Monthly" },
] as const;

export const suggestedAmounts = [500, 1000, 2500, 5000] as const;

export const supportAreas = [
  {
    value: "coral-nurseries",
    label: "Coral nurseries",
    demonstrates: "how fragments are grown on lines before being replanted.",
  },
  {
    value: "reef-monitoring",
    label: "Reef monitoring",
    demonstrates: "how marked colonies are surveyed to catch heat stress early.",
  },
  {
    value: "community-education",
    label: "Community education",
    demonstrates: "how coastal communities learn to watch over their own reefs.",
  },
  {
    value: "emergency-response",
    label: "Emergency response",
    demonstrates: "how teams mobilise quickly during a bleaching event.",
  },
] as const;

export const CUSTOM_MIN = 100;
export const CUSTOM_MAX = 500_000;

const areaValues = supportAreas.map((a) => a.value) as [
  (typeof supportAreas)[number]["value"],
  ...(typeof supportAreas)[number]["value"][],
];

export const supportSchema = z
  .object({
    frequency: z.enum(["one-time", "monthly"], {
      error: "Choose one-time or monthly.",
    }),
    amountPreset: z.enum(["500", "1000", "2500", "5000", "custom"], {
      error: "Choose a suggested amount or enter a custom one.",
    }),
    // number input registered with valueAsNumber → number, or NaN when empty.
    customAmount: z.union([z.number(), z.nan()]).optional(),
    area: z.enum(areaValues, { error: "Choose an area of support." }),
    supporterName: z.string().trim().max(80, "Keep this under 80 characters.").optional(),
    supporterEmail: z
      .union([z.literal(""), z.email("Enter a valid email address.")])
      .optional(),
    acknowledge: z.literal(true, {
      error: "Please acknowledge this is a simulated demonstration.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.amountPreset !== "custom") return;
    const n = data.customAmount;
    if (n === undefined || Number.isNaN(n)) {
      ctx.addIssue({
        code: "custom",
        path: ["customAmount"],
        message: "Enter a custom amount.",
      });
      return;
    }
    if (!Number.isInteger(n)) {
      ctx.addIssue({
        code: "custom",
        path: ["customAmount"],
        message: "Enter a whole number of rupees.",
      });
      return;
    }
    if (n < CUSTOM_MIN || n > CUSTOM_MAX) {
      ctx.addIssue({
        code: "custom",
        path: ["customAmount"],
        message: `Enter between ₹${CUSTOM_MIN} and ₹${CUSTOM_MAX.toLocaleString("en-IN")}.`,
      });
    }
  });

export type SupportValues = z.infer<typeof supportSchema>;

export function resolveAmount(v: SupportValues): number {
  return v.amountPreset === "custom"
    ? Number(v.customAmount)
    : Number(v.amountPreset);
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const formatINR = (n: number) => inr.format(n);
