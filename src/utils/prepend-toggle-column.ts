const prependToggleColumn = (arr: string[]) =>
  arr.length > 0 ? ["toggle", ...arr] : arr;

export { prependToggleColumn };
