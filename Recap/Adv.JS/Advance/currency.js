document.getElementById('convertBtn').addEventListener('click', function () {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;


  const apiURL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);


      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch(error => {
      console.error('Error fetching exchange rate:', error);
      document.getElementById('result').innerHTML = "Error fetching exchange rate!";
    });
});
