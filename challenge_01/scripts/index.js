const currencyOption = [
  'Elige tu moneda',
  'Dolar',
  'Peso Mexicano',
  'Peso Colombiano',
  'Euro',
  'Libra Esterlina' 
];

const currencyValue = [
  'X',
  'USD',
  'MXN',
  'COP',
  'EUR',
  'GBP'
];

const dollar = {
  MXN: 19.96,
  COP: 3755,
  EUR: 0.84,
  GBP: 0.73
};

const fromSelect = document.getElementById('from_currency');
const toSelect = document.getElementById('to_currency');
const btnConvert = document.getElementById('btn_convert');
const strError = document.getElementById('error_message');
const strMessage = document.getElementById('response_message');

createOptions(fromSelect);
createOptions(toSelect);

function createOptions(select) {
  const fragment = document.createDocumentFragment();
  currencyOption.forEach((currency, idx) => {
    const option = document.createElement('option');
    option.value = currencyValue[idx];
    option.innerText = currency;
    fragment.appendChild(option);
  });
  select.appendChild(fragment);
}

function setError(message) {
  strError.innerText = message;
  strError.parentElement.classList.remove('hidden');
  strMessage.parentElement.classList.add('hidden');
  btnConvert.setAttribute('disabled', 'disabled');

  setTimeout(() => {
    strError.parentElement.classList.add('hidden');
    btnConvert.removeAttribute('disabled');
  }, 3000);
}

function setMessage(message) {
  strMessage.innerText = message;
  strMessage.parentElement.classList.remove('hidden');
}

btnConvert.addEventListener('click', () => {
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (validateAmount(amount) && validateOption(fromCurrency) && validateOption(toCurrency)) {
    const total = convertCurrency(fromCurrency, toCurrency, amount);
    setMessage(`${amount} ${fromCurrency} = ${total.toFixed(2)} ${toCurrency}`);
  }
});

function validateAmount(amount) {
  if (isNaN(amount) || amount === 0) {
    setError('Debes ingresar una cantidad');
    return false;
  }
  return true;
}

function validateOption(option) {
  if (option === 'X') {
    setError('Debes seleccionar las divisas');
    return false;
  }
  return true;
}

function convertCurrency(from, to, amount) {
  if (from === 'USD') {
    return amount * dollar[to];
  } if (to === 'USD') {
    return amount / dollar[from];
  } if (from === to) {
    return amount;
  }
  else {
    return amount / dollar[from] * dollar[to];
  }
}