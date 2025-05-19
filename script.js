const tonicSection = document.querySelector('.tonic');
const multipostSection = document.querySelector('.multi-post');
const facebookSection = document.querySelector('.facebook');
const ubernavSection = document.querySelector('.uber-nav');
const tonic_modal = document.getElementById('tonic-modal');
const multipost_modal = document.getElementById('multipost-modal');
const facebook_modal = document.getElementById('facebook-modal');
const ubernav_modal = document.getElementById('ubernav-modal');
const closeButtons = document.querySelectorAll('.modal-close');

tonicSection.addEventListener('click', (e) => {
    if (!e.target.classList.contains('see-project')) {
        tonic_modal.style.display = 'flex';
    }
});

multipostSection.addEventListener('click', (e) => {
    if (!e.target.classList.contains('see-project')) {
        multipost_modal.style.display = 'flex';
    }
});

facebookSection.addEventListener('click', (e) => {
    if (!e.target.classList.contains('see-project')) {
        facebook_modal.style.display = 'flex';
    }
});

ubernavSection.addEventListener('click', (e) => {
    if (!e.target.classList.contains('see-project')) {
        ubernav_modal.style.display = 'flex';
    }
});

closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.style.display = 'none';
    });
  });


window.addEventListener('click', (e) => {
    if (e.target === tonic_modal) {
        tonic_modal.style.display = 'none';
    } else if (e.target === multipost_modal) {
        multipost_modal.style.display = 'none';
    } else if (e.target === facebook_modal) {
        facebook_modal.style.display = 'none';
    } else if (e.target === ubernav_modal) {
        ubernav_modal.style.display = 'none';
    }
});

document.querySelectorAll('.skill-box').forEach(box => {
    box.querySelector('h3').addEventListener('click', () => {
        box.classList.toggle('active');
    const indicator = box.querySelector('.dropdown-indicator');
        indicator.textContent = box.classList.contains('active') ? '▲' : '▼';
    });
  });