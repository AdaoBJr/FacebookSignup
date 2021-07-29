// Cria alerta com o valor do e-mail / telefone
function alertLogin() {
  const btnLogin = document.querySelector('#button-login');
  btnLogin.addEventListener('click', () => {
    alert (document.querySelector('#user-email-phone').value);
  });
}

// Cria input para gênero personalizado
function createInputGenrer() {
  const localGenderPersonal = document.querySelector('.inputGenderP');
  const radioPersonal = document.querySelector('#genderP');
  radioPersonal.addEventListener('click', () => {
    if (!document.querySelector('#inputP')){
      const inputPersonal = document.createElement('input');
      inputPersonal.placeholder = 'Gênero (opcional)';
      inputPersonal.type = 'text';
      inputPersonal.id = 'inputP';
      inputPersonal.name = 'gender-custom';
      localGenderPersonal.appendChild(inputPersonal);
    }
  });
}

// Remove input gênero personalizado caso clicado em Masculino / Feminino
function removeInputGenrer() {
  const radioMasc = document.querySelector('#genderM');
  radioMasc.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated){inputPCreated.remove (); }
  });
  const radioFem = document.querySelector('#genderF');
  radioFem.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated){ inputPCreated.remove (); }
  });
}

// Verifica os Campos não preenchidos e cria msg informando "Campos inválidos"
function msgInvalidFields(event) {
  event.preventDefault();
  const requiredItems = document.querySelectorAll('.required');
  const inputChecked = document.querySelectorAll('input[type="radio"]:checked');
  const invalidMsg = document.querySelector('#msgInvalid');
  let invalid = false;
  for ( let i = 0; i < requiredItems.length; i += 1){
    if ( requiredItems[i].value || inputChecked.value){
      invalidMsg.innerHTML = 'Campos inválidos';
      invalid = true;
    }
  }
  return invalid;
}
// Adiciona Contéudo no lado right-content
function insertContent(event) {
  if (msgInvalidFields(event)) {
    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const email = document.querySelector('#phone_email').value;
    const birthdate = document.querySelector('#inputDate').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;
    const newContent = document.querySelector('.right-content');
    newContent.innerHTML = '';
    newContent.innerText = `Olá, ${firstName} ${lastName} ${email}`;
    newContent.innerText = `${newContent.innerText} ${birthdate} ${gender}`;
  }
}
// Adiciona Evento de Click no botão Registre-se
const btnRegister = document.querySelector('#facebook-register');
btnRegister.addEventListener('click', insertContent);



    

window.onload = () => {
  alertLogin ();
  createInputGenrer ();
  removeInputGenrer ();
}