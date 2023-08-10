const pageRating = document.querySelector('.page-rating');
const pageThanks = document.querySelector('.page-thanks');
const submitButton = document.querySelector('.submit');
const ratingsNums = document.querySelectorAll('.ratings');
const rating = document.getElementById('rating');

submitButton.addEventListener('click', () => {
	pageThanks.classList.remove('hidden');
	pageRating.classList.add('hidden');
});

ratingsNums.forEach((rate) => {
	rate.addEventListener('click', () => {
		rating.innerHTML = rate.dataset.value;
	});
});
