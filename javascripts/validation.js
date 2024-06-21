function emailValidation() {
  const inputEmailConfirm = document.getElementById('email_confirm');
  const content = document.getElementById("content")
  const form = document.getElementById('form');
  const padre2Content = content.parentElement;
  const padre1Content = padre2Content.parentElement;

  const element = document.createElement('tr')
  padre1Content.parentNode.insertBefore(element, padre1Content);
  element.innerHTML = "<td>El correo electrónico no coincide</td>";
  element.style.display = "none";

  inputEmailConfirm.addEventListener('input', e => {

    if(form.email.value !== e.target.value) {

      element.style.display = "block";
      element.style.color = "#d14539"
      inputEmailConfirm.classList.add("alert");

    } else {
      element.style.display = "none";
      inputEmailConfirm.classList.remove("alert");
    }
  });
};

window.onload = emailValidation;