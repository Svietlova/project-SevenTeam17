function removeError(input) {
  const parent = input.parentNode;
  if (parent.classList.contains('error')) {
    parent.querySelector('.error-label').remove();
    parent.classList.remove('error');
  }
}

function createError(input, text) {
  const parent = input.parentNode;
  const errorLabel = document.createElement('label');

  errorLabel.classList.add('error-label');

  errorLabel.textContent = text;

  parent.append(errorLabel);
  parent.classList.add('error');
}

function removeSuccess(input) {
  const parent = input.parentNode;
  if (parent.classList.contains('success')) {
    parent.querySelector('.success-label').remove();
    parent.classList.remove('success');
  }
}

function createSuccess(input) {
  const parent = input.parentNode;
  const successLabel = document.createElement('label');

  successLabel.classList.add('success-label');

  successLabel.textContent = 'Success';

  removeSuccess(input); // Удаляем метку "Success" перед добавлением новой
  parent.append(successLabel);
  parent.classList.add('success');
}

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error-label');

    errorLabel.textContent = text;

    parent.append(errorLabel);
    parent.classList.add('error');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let result = true;

  form.querySelectorAll('input').forEach(input => {
    if (input.dataset.required == 'true') {
      if (input.value == '') {
        removeError(input);
        removeSuccess(input);
        createError(input, 'This field is required');
        result = false;
      } else if (input.type === 'email' && !emailRegex.test(input.value)) {
        removeError(input);
        removeSuccess(input);
        createError(input, 'Invalid email, try again');
        result = false;
      } else {
        removeError(input);
        createSuccess(input);
      }
    }
  });

  return result;
}

footerForm = document.querySelector('.footer-form');

footerForm.addEventListener('submit', event => {
  event.preventDefault();

  if (validation(footerForm) == true) {
    const formData = new FormData(footerForm);

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully');
        } else {
          alert('Error submitting form');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form');
      });
  }
});
