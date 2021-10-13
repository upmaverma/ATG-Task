const login = document.querySelector(".account-btn");
const loginContainer = document.querySelector(".login-container");
const close = document.querySelectorAll(".fa-times-circle");
const signup = document.querySelector(".signup");
const loginForm = document.querySelector(".login");
const loginForm2 = document.querySelector(".login-2");
const newAccount = document.querySelector(".create-new-account");
const signInAccount = document.querySelector(".create-account");
const recommendations = document.querySelector(".recommendations");
const andriodEditIcon = document.querySelector("#create-login-account");
const andriodCreateAccount = document.querySelector(".andriod-create-account");
const andriodLoginAccount = document.querySelector(".andriod-login-account");
const andriodClose = document.querySelectorAll(".andriod-close");
const andriodSignIn = document.querySelector(".andriod-signin");
const andriodCreateIn = document.querySelector(".account-create-in");

const andriodCreateAccountIn = document.querySelector(
  ".andriod-create-account-in"
);
const form = document.querySelector(".form");

login.addEventListener("click", () => {
  loginContainer.classList.add("show-loginContainer");
  loginForm2.classList.remove("show-login-2");
});

signup.addEventListener("click", () => {
  loginForm.style.display = "none";
  loginForm2.style.display = "block";
  loginForm2.classList.add("show-login-2");
});
close.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginContainer.classList.remove("show-loginContainer");
  });
});

newAccount.addEventListener("click", () => {
  loginForm2.style.display = "none";
  loginForm.style.display = "block";
});

signInAccount.addEventListener("click", () => {
  console.log("click");
  recommendations.classList.add("show-recommendations");
});

andriodEditIcon.addEventListener("click", () => {
  andriodCreateAccount.classList.add("show-andriod-create-account");
});

andriodClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    andriodCreateAccount.classList.remove("show-andriod-create-account");
    andriodLoginAccount.classList.remove("show-andriod-login-account");
  });
});

andriodSignIn.addEventListener("click", () => {
  andriodLoginAccount.classList.add("show-andriod-login-account");
  andriodCreateAccount.classList.remove("show-andriod-create-account");
});

andriodCreateIn.addEventListener("click", () => {
  andriodLoginAccount.classList.remove("show-andriod-login-account");
  andriodCreateAccount.classList.add("show-andriod-create-account");
});
