function changeButtonText() {
  let button = document.getElementById('changeButton');
  if (button.innerText === 'Off') {
    button.innerText = 'On';
  } else {
    button.innerText = 'Off';
  }
}
