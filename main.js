const viewDetails = document.getElementById('viewDetails');
const card = document.getElementById('flipContainer');

const flipCard = () => {
  card.toggleClass('hover');
}

viewDetails.addEventListener('click', flipCard);