let btnsubmit = document.getElementById("submit");
let returnbtn = document.getElementById("returnbtn");
let formContent = document.querySelector(".container-custom-form");
let tyContent = document.querySelector(".container-custom-ty");
let formSubmit = document.querySelector(".form");

function checkMatch(email, expression) {
  let emailValue;
  if (email.value.trim().match(expression)) {
    console.log("Yes! it matched");
    emailValue = email.value;
    formSubmit.className = "form";
    formContent.style.display = "none";
    tyContent.style.display = "flex";
  } else {
    formSubmit.className = "active-submit-error";
  }
  return emailValue;
}

// EventHandler when you click a subscibe button
btnsubmit.onclick = (e) => {
  e.preventDefault();
  let input = document.getElementById("email");
  let regEx = /([a-z]\w+[@]\w+\.(com|ac.th))/gi;
  let sendEm = document.getElementById("email-confirm");
  sendEm.innerHTML = checkMatch(input, regEx);
};
//

returnbtn.onclick = (e) => {
  formContent.style.display = "flex";
  tyContent.style.display = "none";
};
