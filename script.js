function signUp() {
  const signUpUsername = document.getElementById("signUp_username").value;
  const signUpEmail = document.getElementById("signUp_email").value;
  const signUpPassword = document.getElementById("signUp_password").value;

  // Check if local storage already contains user data
  const existingData =
    JSON.parse(localStorage.getItem("UserCredentials")) || [];

  // Check if the username or email already exists
  const userExists = existingData.some(
    (user) => user.username === signUpUsername || user.email === signUpEmail
  );

  if (userExists) {
    alert("Username or Email already exists");
    return;
  }

  // Generate a unique user ID
  const UID = Math.floor(Math.random() * 1000);

  // Create the sign-up object
  const signUpForm = {
    userID: UID,
    username: signUpUsername,
    email: signUpEmail,
    password: signUpPassword,
  };

  // Add the new user data to the existing array
  existingData.push(signUpForm);

  // Store the updated data in local storage
  localStorage.setItem("UserCredentials", JSON.stringify(existingData));

  if (signUpUsername && signUpEmail && signUpPassword) {
    console.log("Welcome, " + signUpUsername);
    console.log(
      "Your details are: Email: " +
        signUpEmail +
        ", Password: " +
        signUpPassword
    );
  } else {
    console.log("Please fill in all the fields.");
  }
}

function signIn() {
  const signInUsername = document.getElementById("signIn_username").value;
  const signInPassword = document.getElementById("signIn_password").value;

  const existingData =
    JSON.parse(localStorage.getItem("UserCredentials")) || [];

  const user = existingData.find(
    (user) =>
      user.username === signInUsername && user.password === signInPassword
  );

  if (user) {
    alert("Welcome back, " + user.username);
    window.open("index.html");
    console.log("Welcome back, " + user.username);
  } else {
    alert("Invalid username or password");
  }
}
