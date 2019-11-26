const username = document.querySelector("#username");
const firstname = document.querySelector("#first-name");
const lastname = document.querySelector("#last-name");
const dob = document.querySelector("#dob");
const form = document.getElementsByTagName("form")[0];
const usernamediv = document.querySelector("#username-div");
const firstnamediv = document.querySelector("#first-name-div");
const lastnamediv = document.querySelector("#last-name-div");
const dobdiv = document.querySelector("#dob-div");
const button = document.querySelector("#submit");

const checkValidInput = event => {
  if (/\d/g.test(event.target.value)) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
    const denied = document.createElement("p");
    denied.innerText = "No numbers allowed";
    if (event.target.id === "username") {
      usernamediv.appendChild(denied);
    } else if (event.target.id === "first-name") {
      firstnamediv.appendChild(denied);
    } else if (event.target.id === "last-name") {
      lastnamediv.appendChild(denied);
    }
  } else {
    if (event.target.classList.contains("invalid")) {
      // if Marie was sat down
      if (event.target.id === "username") {
        usernamediv.removeChild(usernamediv.lastChild); //Tell her to drop her computer
      } else if (event.target.id === "first-name") {
        firstnamediv.removeChild(firstnamediv.lastChild);
      } else if (event.target.id === "last-name") {
        lastnamediv.removeChild(lastnamediv.lastChild);
      }
    }

    event.target.classList.remove("invalid"); //Tell her not to sit
    event.target.classList.add("valid"); //tell her to stand
  }
};

const goToNextPage = event => {
  if (
    !username.classList.contains("valid") ||
    !firstname.classList.contains("valid") ||
    !lastname.classList.contains("valid")
  ) {
    event.preventDefault();
  }
};

username.addEventListener("change", checkValidInput);
firstname.addEventListener("keyup", checkValidInput);
lastname.addEventListener("keyup", checkValidInput);
form.addEventListener("submit", goToNextPage);
