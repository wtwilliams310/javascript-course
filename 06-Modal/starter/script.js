'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const addHiddenClass = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeHiddenClass = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', removeHiddenClass);
}

// Adds hidden class on click

btnCloseModal.addEventListener('click', addHiddenClass);

overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden'))
    addHiddenClass();
});
