const signUp_form = document.getElementById("signUp_form");
const formGroups = document.querySelectorAll(".form-group");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitFormBtn");

submitButton.addEventListener("click", function (e) {
  // e.preventDefault();

  const formData = new FormData(signUp_form);

  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
});
/*///////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////*/

document;

signUp_form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  formGroups.forEach((group) => {
    group.classList.remove("error");
    group.querySelector(".error-message").textContent = "";
  });

  console.log(formGroups);

  // Validate inputs
  let isValid = true;

  // First Name validation

  if (firstName.value.trim() === "") {
    isValid = false;
    displayError("firstNameGroup", "First Name is required.");
  }

  // Last Name validation
  if (lastName.value.trim() === "") {
    isValid = false;
    displayError("lastNameGroup", "Last Name is required.");
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    isValid = false;
    displayError("emailGroup", "Please enter a valid email.");
  }

  // Phone Number validation
  const phonePattern = /^[0-9]{10}$/; // Assuming 10 digits for a valid phone number
  if (!phonePattern.test(phone.value)) {
    isValid = false;
    displayError("phoneGroup", "Please enter a valid phone number.");
  }

  // Password validation
  if (password.value.length < 6) {
    isValid = false;
    displayError(
      "passwordGroup",
      "Password must be at least 6 characters long."
    );
  }

  // Confirm Password validation
  if (confirmPassword.value !== password.value) {
    isValid = false;
    displayError("confirmPasswordGroup", "Passwords do not match.");
  }

  // If the form is valid, you can submit it or do further processing
  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// Function to display error messages
function displayError(groupId, message) {
  const group = document.getElementById(groupId);
  group.classList.add("error");
  group.querySelector(".error-message").textContent = message;
}
