// Shared helpers so every field wires aria-describedby / aria-invalid the same
// way. ponytail: two helpers instead of a full Field wrapper — inputs stay
// inline with react-hook-form's register().

export function describedBy(
  ids: (string | false | undefined)[],
): string | undefined {
  const list = ids.filter(Boolean);
  return list.length ? list.join(" ") : undefined;
}

export function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) return null;
  return (
    <p id={id} className="field-error">
      {message}
    </p>
  );
}
