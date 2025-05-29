// Dummy exchange rates (approximate)
const exchangeRates = {
  USD: { INR: 83, EUR: 0.92, GBP: 0.79, AUD: 1.50, CAD: 1.37, JPY: 157, CNY: 7.23, CHF: 0.91, SGD: 1.36, ZAR: 18.4, AED: 3.67, BRL: 5.22 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, AUD: 0.018, CAD: 0.016, JPY: 1.89, CNY: 0.087, CHF: 0.011, SGD: 0.016, ZAR: 0.22, AED: 0.044, BRL: 0.063 },
  EUR: { USD: 1.09, INR: 90.5, GBP: 0.86, AUD: 1.63, CAD: 1.49, JPY: 170, CNY: 7.82, CHF: 0.99, SGD: 1.47, ZAR: 20.1, AED: 4.01, BRL: 5.67 },
  GBP: { USD: 1.27, INR: 105, EUR: 1.17, AUD: 1.90, CAD: 1.74, JPY: 197, CNY: 9.12, CHF: 1.16, SGD: 1.72, ZAR: 23.5, AED: 4.68, BRL: 6.67 },
  AUD: { USD: 0.67, INR: 55.4, EUR: 0.61, GBP: 0.53, CAD: 0.91, JPY: 104.2, CNY: 4.78, CHF: 0.61, SGD: 0.91, ZAR: 12.4, AED: 2.44, BRL: 3.50 },
  CAD: { USD: 0.73, INR: 60.4, EUR: 0.67, GBP: 0.57, AUD: 1.10, JPY: 114.1, CNY: 5.21, CHF: 0.67, SGD: 1.00, ZAR: 13.5, AED: 2.68, BRL: 3.84 },
  JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0059, GBP: 0.0051, AUD: 0.0096, CAD: 0.0088, CNY: 0.046, CHF: 0.0058, SGD: 0.0088, ZAR: 0.12, AED: 0.023, BRL: 0.034 },
  CNY: { USD: 0.14, INR: 11.5, EUR: 0.13, GBP: 0.11, AUD: 0.21, CAD: 0.19, JPY: 21.6, CHF: 0.13, SGD: 0.19, ZAR: 2.6, AED: 0.51, BRL: 0.73 },
  CHF: { USD: 1.10, INR: 91.2, EUR: 1.01, GBP: 0.86, AUD: 1.64, CAD: 1.49, JPY: 171, CNY: 7.87, SGD: 1.48, ZAR: 20.3, AED: 4.05, BRL: 5.71 },
  SGD: { USD: 0.74, INR: 60.8, EUR: 0.68, GBP: 0.58, AUD: 1.10, CAD: 1.00, JPY: 114.7, CNY: 5.23, CHF: 0.68, ZAR: 13.6, AED: 2.71, BRL: 3.88 },
  ZAR: { USD: 0.054, INR: 4.45, EUR: 0.050, GBP: 0.043, AUD: 0.080, CAD: 0.074, JPY: 8.43, CNY: 0.38, CHF: 0.049, SGD: 0.074, AED: 0.20, BRL: 0.29 },
  AED: { USD: 0.27, INR: 22.5, EUR: 0.25, GBP: 0.21, AUD: 0.41, CAD: 0.37, JPY: 42.6, CNY: 1.94, CHF: 0.25, SGD: 0.37, ZAR: 5.0, BRL: 0.71 },
  BRL: { USD: 0.19, INR: 15.7, EUR: 0.18, GBP: 0.15, AUD: 0.29, CAD: 0.26, JPY: 30.9, CNY: 1.37, CHF: 0.18, SGD: 0.26, ZAR: 3.45, AED: 1.41 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    document.getElementById('result').innerText = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    document.getElementById('result').innerText = `Converted Amount: ${amount} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  if (!rate) {
    document.getElementById('result').innerText = "Conversion not available.";
    return;
  }

  const result = (amount * rate).toFixed(2);
  document.getElementById('result').innerText = `Converted Amount: ${result} ${to}`;
}
