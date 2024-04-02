function keydownAction(event) {
  // TODO: Complete keydown function
  const key = event.key.toLowerCase();
  const alphabetNumericCharacters =
    'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
};


function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

