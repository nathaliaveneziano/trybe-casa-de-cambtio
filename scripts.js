const handleRates = (ratesData) => {
  const currencyList = document.querySelector('#currency-list');

  const entries = Object.entries(ratesData.rates);

  entries.forEach((array) => {
    const [ currency, rate ] = array;

    const li = document.createElement('li');
    li.innerHTML = `<strong>${currency}:</strong> ${rate.toFixed(2)}`;

    currencyList.appendChild(li);
    console.log
  });
};

const fetchCurrency = (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((object) => {
      if (object.error) {
        // caso o objeto retorne a chave ERROR, jogamos para o catch tratar
        // erro na regra de negócio
        throw new Error(object.error);
      }

      handleRates(object);

    })
    .catch((error) => {
      // esse bloco trata erros das requisições acima ou quando levantados
      window.alert(error);
    });
};

const handleSearchEvent =() => {
  const searchInput = document.querySelector('#currency-input');
  const currency = searchInput.value.toUpperCase();

  fetchCurrency(currency);
};

const setupEvents = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

window.onload = () => {
  setupEvents();

}

// listar branchs remotas = git banch -a
// puxar branch remota = git checkout nome-branch