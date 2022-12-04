export function isNumber(str: string) {
    return !Number.isNaN(parseFloat(str));
  }