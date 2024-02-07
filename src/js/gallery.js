// ================================================================

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ================================================================

const settingsIziToast = {
  message: 'Please fill out the input field.',
  backgroundColor: '#FFA000',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  position: 'topRight',
  timeout: 3000,
  progressBar: false,
};

// ================================================================

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.gallery-input');
const btnSub = document.querySelector('.gallery-btn');

const loader = document.querySelector('.loader');

const gallery = document.querySelector('.gallery-list');
const galleryItem = document.querySelector('.gallery-item');
const galleryImage = document.querySelector('.gallery-image');

// ================================================================

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const text = form.elements.text.value.trim();

  if (!text) {
    iziToast.warning(settingsIziToast);
    return;
  }
  form.reset();
}

// ================================================================

// ================================================================
