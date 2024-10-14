const submitButton = document.getElementById("submitFormBtn");
const signUp_form = document.getElementById("signUp_form");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData(signUp_form);

  // Trigger the hidden submit button
  document.getElementById("hiddenSubmitButton").click();

  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }

  signUp_form.submit();
});
