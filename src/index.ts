import { Inputs } from "./interface/Inputs";

// get elements, set attrs
const elId = (id: string) => document.getElementById(id);
const selector = (tag: string) => document.querySelector(tag);

let form = selector('form');

const clearForm = (inputs: Inputs) => {
  let { name, nickname } = inputs;
  name = '';
  nickname = '';

  console.log(name, nickname);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = (elId('name') as HTMLInputElement);
  let nickName = (elId('nickName') as HTMLInputElement);
  let alertDiv = elId('alert');
  let infos = selector('p') as HTMLElement;

  const alertValues = ['success', 'error', 'warning', 'info'];

  let inputs = {
    name: name.value,
    nickname: nickName.value
  };

  clearForm(inputs);

  if (inputs.name == '' && inputs.nickname == '') {
    alertDiv.classList.add(alertValues[1]);
    alertDiv.innerHTML = 'fields can\'t be empty';
    alertDiv.classList.remove(alertValues[0], alertValues[2], alertValues[3]);
    return;
  }

  if (inputs.name == '' || inputs.nickname == '') {
    alertDiv.classList.add(alertValues[2]);
    alertDiv.innerHTML = 
      `${inputs.name == '' ? 'name' : 'nickname'} can\'t be empty`;
    alertDiv.classList.remove(alertValues[0], alertValues[1], alertValues[3]);
    return;
  }

  if (inputs.name && inputs.nickname) {
    infos.innerHTML = 
      `Hello ${inputs.name}! Your nickname is ${inputs.nickname}`;
    alertDiv.classList.add(alertValues[0]);
    alertDiv.innerHTML = 'user created';
  }

  // console.log(inputs);
});
