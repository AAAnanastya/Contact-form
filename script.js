let textInputs = document.querySelectorAll('input[type="text"]');
let emailInputs = document.querySelectorAll('input[type="email"]');
let textAreas = document.querySelectorAll('textarea');
let radios = document.querySelectorAll('input[type="radio"]');
let checker = document.querySelector('.contact-form__footer__confirmation-button');

function filledCheck() {
  let inputsArray = [...Array.from(textInputs), ...Array.from(emailInputs), ...Array.from(textAreas)];

  inputsArray.forEach((input) => {
    if (input.value.trim() == '') {
      input.style.borderColor = 'hsl(0, 66%, 54%)';

      let nextElement = input.nextElementSibling;
      if (nextElement.classList.contains('notification__hidden')) {
        nextElement.classList.remove('notification__hidden');
        nextElement.classList.add('notification__shown');
      }
    } else {
      input.style.borderColor = 'hsl(186, 15%, 59%)';

      let nextElement = input.nextElementSibling;
      if (nextElement.classList.contains('notification__shown')) {
        nextElement.classList.remove('notification__shown');
        nextElement.classList.add('notification__hidden');
      }
    }
  });
}

function emailValidation() {
  emailInputs.forEach((input) => {
    let email = input.value.trim();
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let previousValid = input.nextElementSibling;
    let currentValid = previousValid.nextElementSibling;

    if (email.length > 0 && regex.test(email) == false) {
      input.style.borderColor = 'hsl(0, 66%, 54%)';

      if (currentValid.classList.contains('notification__hidden')) {
        currentValid.classList.remove('notification__hidden');
        currentValid.classList.add('notification__shown');
      }
    } else if (regex.test(email) == true) {
      input.style.borderColor = 'hsl(186, 15%, 59%)';

      if (currentValid.classList.contains('notification__shown')) {
        currentValid.classList.remove('notification__shown');
        currentValid.classList.add('notification__hidden');
      }
    } else if (currentValid.classList.contains('notification__shown') && email.length == 0) {
      currentValid.classList.remove('notification__shown');
      currentValid.classList.add('notification__hidden');
    }
  });
}

function selectRadio(id) {
  let currentrRadio = document.getElementById(id);
  currentrRadio.checked = true;

  function radioContainerCheck() {
    radios.forEach((radio) => {
      let radioContainer = radio.parentElement;
      if (radio.checked == true) {
        radioContainer.style.backgroundColor = 'hsl(148, 38%, 91%)';
        radioContainer.style.borderColor = 'hsl(169, 82%, 27%)';
      } else if (radio.checked == false) {
        radioContainer.style.backgroundColor = '';
        radioContainer.style.borderColor = '';
      }
    });
  }

  radioContainerCheck();
}

function radioValidation() {
  let radiosState = Array.from(radios).some((radio) => radio.checked == true);
  let notifiation = document.getElementById('query_notification');

  if (radiosState == false) {
    notifiation.classList.remove('notification__hidden');
    notifiation.classList.add('notification__shown');
  } else if (radiosState == true && notifiation.classList.contains('notification__shown')) {
    notifiation.classList.remove('notification__shown');
    notifiation.classList.add('notification__hidden');
  }
}

function checkboxActive() {
  let checkbox = document.getElementById('contact-permission');

  if (checkbox.checked == false) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

function checkboxValidation() {
  let checkbox = document.getElementById('contact-permission');
  let notification = document.getElementById('checkbox_notification');

  if (checkbox.checked !== true) {
    notification.classList.remove('notification__hidden');
    notification.classList.add('notification__shown');
  } else if (checkbox.checked == true && notification.classList.contains('notification__shown')) {
    notification.classList.remove('notification__shown');
    notification.classList.add('notification__hidden');
  }
}

checker.addEventListener('click', () => {
  filledCheck();
  emailValidation();
  radioValidation();
  checkboxValidation();
});
