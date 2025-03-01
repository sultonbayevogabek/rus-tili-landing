const phoneInputs = document.querySelectorAll(".phone");
const allowedKeys = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'Backspace',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
  'Enter'
]

phoneInputs.forEach(phone => {
  phone.addEventListener("keydown", e => {
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  })

  phone.addEventListener("input", e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let parts = [value.slice(0, 2), value.slice(2, 5), value.slice(5, 7), value.slice(7, 9)];

    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {
      if (parts[i]) {
        result += `-${parts[i]}`;
      }
    }

    e.target.value = result;
  })
})

const registerButtons = document.querySelectorAll('[data-open-form]');
const modalBackdrop = document.querySelector('#form-backdrop');
const modalCloserElements = document.querySelectorAll('[data-modal-close]');
const forms = document.querySelectorAll('[data-form]');
const successModal = document.querySelector('#success-backdrop');
const joinChannelBtn = document.querySelector('#join-channel');

joinChannelBtn.addEventListener('click', () => {
  window.location.href = 'https://t.me/zarinaismailovna'
})

registerButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalBackdrop.classList.remove('hidden')
  })
})

function closeModal() {
  modalBackdrop.classList.add('hidden');
}

function openSuccess() {
  successModal.classList.remove('hidden');
}

function closeSuccess() {
  successModal.classList.add('hidden');
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeSuccess();
  }
})

modalCloserElements.forEach(el => {
  el.addEventListener('click', e => {
    if (e.target.hasAttribute('data-modal-close')) {
      closeModal();
      closeSuccess();
    }
  })
})

forms.forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitButton = e.target.querySelector('[data-form-button]');
    const formAlert = e.target.querySelector('[data-form-alert]');
    const name = e.target.querySelector('[data-form-name]').value.trim();
    const phone = e.target.querySelector('[data-form-phone]').value?.replace(/[^0-9]/g, '');
    const telegram = e.target.querySelector('[data-form-telegram]').value?.trim();

    if (!name.length) {
      formAlert.textContent = 'Ismingizni kiriting';
      formAlert.classList.remove('hidden');
      return;
    }

    if (phone?.length !== 9) {
      formAlert.textContent = 'Telefon raqamingizni kiriting';
      formAlert.classList.remove('hidden');
      return;
    }

    if (name.length && phone?.length === 9) {
      formAlert.classList.add('hidden')
      submitButton.setAttribute('disabled', true);
      submitButton.textContent = 'Yuborilmoqda...'

      const user ={
        name,
        phone: '+998' + phone,
        telegram,
        time: new Date().toLocaleString()
      }

      const formData = new FormData();

      formData.append('Ismi', user?.name);
      formData.append('Telefon raqami', user?.phone);
      formData.append('Telegrami', user?.telegram);
      formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

      let response = await fetch('https://script.google.com/macros/s/AKfycbyiXM4n1a5Su9OI-CUoHLND6ELHhiqa35NfellUcsie2q4blMShEsq0w7dnmcKyaJZJpw/exec', {
        method: 'POST',
        body: formData
      })
      await response.json();

      e.target?.reset()
      submitButton.removeAttribute('disabled');
      submitButton.textContent = "Ro'yxatdan o'tish";
      closeModal();
      openSuccess();
    }
  })
})

