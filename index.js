const ratingButtons = document.querySelectorAll('.ratingBtn');
const submitBtn = document.querySelector('.submitBtn');
const ratingStateContainer = document.querySelector('.ratingStateContainer');
const thankyouStateContainer = document.querySelector('.thankyouStateContainer');
const ratingMessage = document.querySelector('.ratingMessage');
let rating = -1;

ratingButtons.forEach((ratingBtn, index) => {
    ratingBtn.addEventListener('click', () => {
        ratingButtons.forEach(btn => {
            btn.classList.remove('active');
        })

        rating = index + 1;
        ratingBtn.classList.add('active');

        if (!submitBtn.classList.contains('active')) {
            submitBtn.classList.add('active');
        }
    })
})

submitBtn.addEventListener('click', () => {
    if (rating !== -1) {
        ratingStateContainer.style.display = "none";
        thankyouStateContainer.style.display = "flex";  
        ratingMessage.textContent = `You selected ${rating} out of 5`;
    }
})