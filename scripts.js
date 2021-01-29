const handleSearchEvent =() => {
  const searchInput = document.querySelector('#currency-input');
  const currency = searchInput.value.toUpperCase();

  console.log('button click', currency);
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