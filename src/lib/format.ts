const cadFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

export function formatCad(amount: number) {
  return `${cadFormatter.format(amount)} CAD`;
}

export function formatCadFrom(amount: number) {
  return `From ${formatCad(amount)}`;
}

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function toSmsHref(phone: string) {
  return `sms:${phone.replace(/[^\d+]/g, "")}`;
}
