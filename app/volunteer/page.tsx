import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with REEF: dive-team roles, surface support, and reef monitoring. Register your interest through an accessible sign-up form.",
};

const roles = [
  {
    title: "Nursery diver",
    body: "Tend rope nurseries, tag fragments, and out-plant survivors. Open-water certification and a check-out dive required.",
  },
  {
    title: "Reef monitor",
    body: "Photograph and measure marked colonies on a fixed survey route. Ideal for confident snorkelers and freedivers.",
  },
  {
    title: "Surface support",
    body: "Run the boat log, manage gear, and record data topside. No diving required — a full day above the water still keeps the reef alive.",
  },
];

export default function VolunteerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        Volunteer
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Plant coral with your own hands.
      </h1>
      <p className="mt-6 font-sans text-lg text-paper/90">
        REEF trains volunteers to do the slow, methodical work of restoration.
        Pick a role that fits your comfort in the water — every one of them
        matters.
      </p>

      <section aria-labelledby="roles-heading" className="mt-12">
        <h2 id="roles-heading" className="text-2xl sm:text-3xl">
          Roles
        </h2>
        <ul className="mt-6 space-y-4">
          {roles.map((role) => (
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
        <p className="mt-2 font-sans text-sm text-paper/70">
          This is a demonstration form. Validation and submission are not yet
          wired up, so no data is sent or stored.
        </p>

        <form className="mt-6 space-y-6" aria-describedby="form-note">
          <div>
            <label
              htmlFor="full-name"
              className="block font-sans text-sm font-semibold"
            >
              Full name
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              className="mt-2 block w-full rounded-md border border-white/20 bg-abyss/60 px-3 py-3 font-sans text-base text-paper"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-sans text-sm font-semibold"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-describedby="email-help"
              className="mt-2 block w-full rounded-md border border-white/20 bg-abyss/60 px-3 py-3 font-sans text-base text-paper"
            />
            <p id="email-help" className="mt-1 font-sans text-sm text-paper/60">
              We use this only to arrange your check-out dive.
            </p>
          </div>

          <div>
            <label
              htmlFor="role"
              className="block font-sans text-sm font-semibold"
            >
              Preferred role
            </label>
            <select
              id="role"
              name="role"
              defaultValue=""
              className="mt-2 block w-full rounded-md border border-white/20 bg-abyss/60 px-3 py-3 font-sans text-base text-paper"
            >
              <option value="" disabled>
                Choose a role
              </option>
              <option value="nursery-diver">Nursery diver</option>
              <option value="reef-monitor">Reef monitor</option>
              <option value="surface-support">Surface support</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block font-sans text-sm font-semibold"
            >
              Diving experience
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={4}
              aria-describedby="experience-help"
              className="mt-2 block w-full rounded-md border border-white/20 bg-abyss/60 px-3 py-3 font-sans text-base text-paper"
            />
            <p
              id="experience-help"
              className="mt-1 font-sans text-sm text-paper/60"
            >
              Optional. Certifications, logged dives, or “none yet” are all fine.
            </p>
          </div>

          <p id="form-note" className="font-sans text-sm text-paper/60">
            Fields are unvalidated in this build. Nothing you type is submitted.
          </p>

          <button
            type="submit"
            className="min-h-11 rounded-md bg-gold px-6 py-3 font-sans font-semibold text-abyss"
          >
            Register interest
          </button>
        </form>
      </section>
    </article>
  );
}
