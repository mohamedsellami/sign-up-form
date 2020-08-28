document.querySelector(".submit").addEventListener("click", sendForm);
function sendForm(e) {
  e.preventDefault();
  document.querySelectorAll(".input").forEach((a) => {
    if (a.value == "") {
      console.log(a.classList[1] == "email");
      if (
        a.classList[1] != "email" &&
        a.style.cssText != "border: 2px solid rgb(255, 122, 122);"
      ) {
        a.style.border = "2px solid hsl(0, 100%, 74%)";
        a.insertAdjacentHTML(
          "afterend",
          `
      <img src="./images/icon-error.svg" alt="error" />
      <p>${a.getAttribute("placeholder")} cannot be empty<p>
      `
        );
        a.removeAttribute("placeholder");
      } else if (
        a.classList[1] == "email" &&
        a.style.cssText != "border: 2px solid rgb(255, 122, 122);"
      ) {
        a.style.border = "2px solid hsl(0, 100%, 74%)";
        a.removeAttribute("placeholder");
        a.setAttribute("placeholder", `email@example/com`);
        a.classList.add("placeholder2");
        a.insertAdjacentHTML(
          "afterend",
          `
      <img src="./images/icon-error.svg" alt="error" />
      <p>Looks like this is not an email<p>
      
      `
        );
      }
    }
  });
}
document.querySelectorAll(".container .input").forEach((a) => {
  a.addEventListener("focus", removeAlert);
  function removeAlert() {
    if (a.style.cssText == "border: 2px solid rgb(255, 122, 122);") {
      if (a.classList[2] == "placeholder2") {
        a.classList.remove("placeholder2");
      }
      a.style.border = "2px solid lightgrey";
      a.setAttribute("placeholder", `${a.getAttribute("name")}`);
      a.parentElement.children[1].remove();
      a.parentElement.children[1].remove();
    }
  }
});
