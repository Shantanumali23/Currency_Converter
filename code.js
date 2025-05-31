const exchangeRates = {
    USD: {
        INR: 83,
        EUR: 0.92,
        JPY: 157,
        GBP: 0.79
    },
    INR: {
        USD: 0.012,
        EUR: 0.011,
        JPY: 1.89,
        GBP: 0.0095
    },
    EUR: {
        USD: 1.09,
        INR: 90.5,
        JPY: 170,
        GBP: 0.86
    },
    JPY: {
        USD: 0.0064,
        INR: 0.53,
        EUR: 0.0059,
        GBP: 0.0051
    },
    GBP: {
        USD: 1.27,
        INR: 105,
        EUR: 1.17,
        JPY: 197
    }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = "Enter a valid amount";
        return;
    }

    if (from === to) {
        document.getElementById('result').innerText = `${amount.toFixed(2)} ${to}`;
        return;
    }

    const rate = exchangeRates[from][to];
    if (!rate) {
        document.getElementById('result').innerText = "Rate not available";
        return;
    }

    const converted = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `${converted} ${to}`;
}
