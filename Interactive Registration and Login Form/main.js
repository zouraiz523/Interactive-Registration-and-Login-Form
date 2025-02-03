   // DOM Elements for switching forms
   const registerForm = document.getElementById('registerForm');
   const loginForm = document.getElementById('loginForm');
   const switchToRegisterLink = document.getElementById('switchToRegister');
   const switchToLoginLink = document.getElementById('switchToLogin');

   // Enable/Disable the Register Button Based on Validation
const registerInputs = registerForm.querySelectorAll('input:not([type="color"])');
const registerBtn = document.getElementById('registerBtn');

registerInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (validateForm(registerForm)) {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  });
});

   // Switch to Register Form (from Login Form)
   switchToRegisterLink.addEventListener('click', (e) => {
     e.preventDefault();
     loginForm.classList.add('hidden');
     registerForm.classList.remove('hidden');
   });

   // Switch to Login Form (from Registration Form)
   switchToLoginLink.addEventListener('click', (e) => {
     e.preventDefault();
     registerForm.classList.add('hidden');
     loginForm.classList.remove('hidden');
   });

   // Initialize Feather icons (if needed for other elements)
   feather.replace();

   // Password Toggle Functionality using a single emoji icon
   document.querySelectorAll('.password-icon').forEach(icon => {
     icon.addEventListener('click', () => {
       // Find the input element in the same input-group
       const input = icon.closest('.input-group').querySelector('input');
       if (input.type === 'password') {
         input.type = 'text';
         icon.textContent = '🙈'; // Change to "eye-off" emoji
       } else {
         input.type = 'password';
         icon.textContent = '👁'; // Change back to "eye" emoji
       }
     });
   });

   // Update the hex value display when the color input changes
   const colorPicker = document.getElementById('colorPicker');
   const hexValueDisplay = document.getElementById('hexValue');

   if (colorPicker && hexValueDisplay) {
     colorPicker.addEventListener('input', () => {
       hexValueDisplay.textContent = 'Hex: ' + colorPicker.value;
     });
   }

   // Input Validation Function (excludes color inputs)
   function validateForm(form) {
     const inputs = form.querySelectorAll('input:not([type="color"])');
     let isValid = true;
     inputs.forEach(input => {
       // Check if the value is empty after trimming whitespace
       if (input.value.trim() === '') {
         input.style.borderColor = 'red';
         isValid = false;
       } else {
         input.style.borderColor = '#ddd';
       }
     });
     return isValid;
   }

   // Form Submission Handling for Registration Form
   registerForm.addEventListener('submit', (e) => {
     e.preventDefault();
     if (validateForm(registerForm)) {
       alert('Registration Successful!');
       registerForm.reset();
     } else {
       alert('Please fill out all fields.');
     }
   });

   // Form Submission Handling for Login Form
   loginForm.addEventListener('submit', (e) => {
     e.preventDefault();
     if (validateForm(loginForm)) {
       alert('Login Successful!');
       loginForm.reset();
     } else {
       alert('Please fill out all fields.');
     }
   });