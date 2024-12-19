// DOM Elements
let loginbtn = document.getElementById("login_btn");
let signUpPage = document.getElementById("signup");
let logInPage = document.getElementById("login");
let signupbtn = document.getElementById("signup_btn");
let signupSubmit = document.getElementById("signupbtn");
let loginSubmit = document.getElementById("loginbtn");

// Switch to Login Page
loginbtn.addEventListener('click', () => {
   signUpPage.style.display = 'none';
   logInPage.style.display = 'block';
});

// Switch to Signup Page
signupbtn.addEventListener('click', () => {
   signUpPage.style.display = 'block';
   logInPage.style.display = 'none';
});

// Signup Functionality
signupSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   // Get Input Values
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all fields!");
      return;
   }

   if (localStorage.getItem(email)) {
      alert("User already registered!");
      return;
   }

   // Save New User to Local Storage
   let newUser = { firstName, lastName, password, email };
   localStorage.setItem(email, JSON.stringify(newUser));
   alert("Registration successful!");
   loginbtn.click();
});

// Login Functionality
loginSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   let email = document.getElementById("email_login").value;
   let password = document.getElementById("password_login").value;

   if (!email || !password) {
      alert("Please fill in all fields!");
      return;
   }

   // Retrieve User Data
   let userData = JSON.parse(localStorage.getItem(email));

   if (!userData) {
      alert("User not found. Please sign up first.");
      return;
   }

   if (userData.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", true); // Mark as logged in
      localStorage.setItem("currentUser", JSON.stringify(userData)); // Store current user
      window.location.href = "converter.html"; // Redirect to Profile Page
   } else {
      alert("Invalid email or password.");
   }
});

const storedPassword = localStorage.getItem(password);


if (storedPassword  === password) {
   alert('Login successful!');
   
} else {
   alert('Invalid username or password.');
}

