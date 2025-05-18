const tonicSection = document.querySelector('.tonic');
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');

tonicSection.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});