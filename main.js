const viewDetails = document.getElementById('viewDetails');
const card = document.getElementById('flipContainer');





// viewDetails.on("click", ".flip-container", function () {
//     $(this).toggleClass('hover');
// });

const flipCard = () => {
  card.toggleClass('hover');
}

viewDetails.addEventListener('click', flipCard);