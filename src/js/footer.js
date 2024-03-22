'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.footer-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const footerModal = document.querySelector('.footer-modal-background');
  const footerSuccess = document.querySelector('.footer-input-success-message');
  const footerError = document.querySelector('.footer-input-error-message');
  const email = document.getElementById('email');
  const comment = document.getElementById('comment');

  email.classList.remove('footer-input-error');
  footerError.style.display = 'none';

  const data = {
    email: email.value,
    comment: comment.value,
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        footerModal.classList.add('footer-modal-is-open');

        const closeButton = document.querySelector('.footer-modal-btn');
        closeButton.addEventListener('click', function () {
          footerModal.classList.remove('footer-modal-is-open');
        });
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            footerModal.classList.remove('footer-modal-is-open');
          }
        });
        footerModal.addEventListener('click', function (event) {
          if (event.target === footerModal) {
            footerModal.classList.remove('footer-modal-is-open');
          }
        });
        email.classList.add('footer-input-success');
        footerSuccess.style.display = 'block';
        setTimeout(function () {
          footerSuccess.style.display = 'none';
          email.classList.remove('footer-input-success');
        }, 10000);
        form.reset();
      } else {
        iziToast.error({
          title: 'Oops!',
          message: 'Please, enter a valid email address',
        });
        email.classList.add('footer-input-error');
        footerError.style.display = 'block';
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
});
