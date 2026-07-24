import type { Metadata } from "next";
import { VolunteerForm } from "@/components/volunteer/VolunteerForm";
import { volunteerIntro, volunteerRoles } from "@/content/volunteer";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with REEF: reef monitoring, community education, restoration support, and digital volunteering. Register your interest through an accessible, validated form.",
};

export default function VolunteerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        {volunteerIntro.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        {volunteerIntro.heading}
      </h1>
      <p className="mt-6 font-sans text-lg text-paper/90">
        {volunteerIntro.lead}
      </p>

      <section aria-labelledby="roles-heading" className="mt-12">
        <h2 id="roles-heading" className="text-2xl sm:text-3xl">
          Ways to take part
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {volunteerRoles.map((role) => (
            <li
              key={role.title}
              className="rounded-xl border border-white/10 bg-deep/40 p-5"
            >
              <h3 className="font-serif text-xl">{role.title}</h3>
              <p className="mt-2 font-sans text-paper/85">{role.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="signup-heading" className="mt-12">
        <h2 id="signup-heading" className="text-2xl sm:text-3xl">
          Register your interest
        </h2>
        <p className="mt-2 font-sans text-paper/85">
          Complete the form below and we will point you to the right team. It is
          a demonstration: your answers stay in your browser and nothing is sent.
        </p>
        <div className="mt-6">
          <VolunteerForm />
        </div>
      </section>
    </article>
  );
}
