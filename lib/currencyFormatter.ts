const currencyFormatter = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  style: "currency",
  minimumFractionDigits: 0,
});
const numberFormatter = new Intl.NumberFormat("en-IN");

const formatCurrency = (num: number) => {
  return currencyFormatter.format(num);
};

const formatNumber = (num: number) => {
  return numberFormatter.format(num);
};

export { formatCurrency, formatNumber };
