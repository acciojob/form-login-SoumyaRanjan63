document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', getFormValue);
});

function getFormValue(event) {
  event.preventDefault();

  const form = document.getElementById('myForm');
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;

  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}
