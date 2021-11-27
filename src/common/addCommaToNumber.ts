export const addCommaToNumber = (num: string | number) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
