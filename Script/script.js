function scrollToCards() {
    const cardsSection = document.getElementById('cards');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
}
// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');

// Open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

// Services Model

const servicesModal = document.getElementById('servicesModal');
const serviceModelButton = document.getElementById('serviceModelButton'); 
const closeServiceBtn = document.querySelector('.closeServices'); 

// Open the modal
serviceModelButton.addEventListener('click', () => {
  servicesModal.style.display = 'flex';
});

// Close the modal
closeServiceBtn.addEventListener('click', () => {
  servicesModal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target == servicesModal) {
    servicesModal.style.display = 'none';
  }
});
// About- us

const Aboutus = document.getElementById('Aboutus');
const AboutusBtn = document.getElementById('openUsModal');
const closeUs = document.querySelector('.closeUs');

// Open the modal
AboutusBtn.addEventListener('click', () => {
    Aboutus.style.display = 'flex'; 
});

// Close the modal
closeUs.addEventListener('click', () => {
    Aboutus.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target == Aboutus) {
    Aboutus.style.display = 'none';
  }
});



