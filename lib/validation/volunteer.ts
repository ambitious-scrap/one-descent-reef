import { z } from "zod";

export const participationModes = [
  { value: "remote", label: "Remote" },
  { value: "in-person", label: "In person" },
  { value: "either", label: "Either" },
] as const;

export const interests = [
  { value: "reef-monitoring", label: "Reef monitoring" },
  { value: "community-education", label: "Community education" },
  { value: "restoration-support", label: "Restoration support" },
  { value: "digital-volunteering", label: "Digital volunteering" },
  { value: "fundraising-outreach", label: "Fundraising and outreach" },
] as const;

export const availabilities = [
  { value: "one-time", label: "One-time activity" },
  { value: "monthly", label: "Monthly" },
  { value: "several-yearly", label: "Several times per year" },
  { value: "flexible", label: "Flexible" },
] as const;

const values = <T extends readonly { value: string }[]>(opts: T) =>
  opts.map((o) => o.value) as [T[number]["value"], ...T[number]["value"][]];

export const volunteerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z.email("Enter a valid email address."),
  country: z
    .string()
    .trim()
    .min(2, "Please enter your country or region.")
    .max(60, "Keep this to 60 characters or fewer."),
  participationMode: z.enum(values(participationModes), {
    error: "Choose how you would like to take part.",
  }),
  interest: z.enum(values(interests), {
    error: "Choose a primary interest.",
  }),
  availability: z.enum(values(availabilities), {
    error: "Choose your availability.",
  }),
  motivation: z
    .string()
    .trim()
    .min(20, "Tell us a little more — at least 20 characters.")
    .max(600, "Please keep this under 600 characters."),
  experience: z
    .string()
    .trim()
    .max(600, "Please keep this under 600 characters.")
    .optional(),
  consent: z.literal(true, {
    error: "We need your permission to contact you.",
  }),
});

export type VolunteerValues = z.infer<typeof volunteerSchema>;
