export function isNumber(s) {
  return !isNaN(parseFloat(s)) && isFinite(s)
}
