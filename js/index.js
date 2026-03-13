const time = document.querySelector(".greeting-timebox__time");
const revenue = document.querySelector(".total-revenue");

const locale = navigator.language;

setInterval(() => {
  const date = new Date();
  time.textContent = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}, 1000);

const revenueTotal = 5000;

revenue.textContent = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: "CAD",
  currencyDisplay: "narrowSymbol",
}).format(revenueTotal);
