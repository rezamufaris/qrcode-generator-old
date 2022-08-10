const wrapper = document.querySelector('.wrapper'),
  qrInput = wrapper.querySelector('.form input'),
  generateBtn = wrapper.querySelector('.form button'),
  qrImg = wrapper.querySelector('.qr-code img');
let preValue;

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value;
  if (!qrValue || preValue === qrValue) return; // if the input is empty then return from here
  preValue = qrValue;
  generateBtn.innerText = 'Generating QR Code...';
  // getting a QR Code of user entered value using the qrserver
  // api and passing the api returned img src to qrIMG
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${qrValue}`;
  qrImg.addEventListener('load', () => {
    // once QR Code img loaded
    wrapper.classList.add('active');
    generateBtn.innerText = 'Generate QR Code';
  });
});

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove('active');
    preValue = '';
  }
});
