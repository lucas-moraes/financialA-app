export function FormatValue(value: string) {
  return Number(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');
}
