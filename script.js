const titleInput = document.querySelector(".title-input");
const inputFrame = document.querySelector(".input-frame");
const addButton = document.querySelector(".add-button");
const inputs = document.querySelector(".inputs");
const descriptionInput = document.querySelector(".description-input");
const dateInputContainer = document.querySelector(".date-input-container");
const dateInput = document.querySelector("#date-input");
const caretUp = document.querySelector(".caret-up");

titleInput.addEventListener("focus", () => {
  inputFrame.style.cssText = `
    padding: 5px;
    column-gap: 10px`;

  inputs.style.cssText = `
    flex: 1;
    row-gap: 5px`;

  descriptionInput.style.cssText = `
    display: block;
    animation: 500ms descriptionEntry forwards;`;

  addButton.style.borderRadius = "5px";

  titleInput.style.cssText = `
    padding: 15px 5px 0 5px;
    border-radius: 0;
    border-bottom: 2px solid black`;

  dateInputContainer.style.cssText = `
    display: flex;`;

  caretUp.style.display = "block";
});

caretUp.addEventListener("click", () => {
  inputFrame.style.cssText = `
    padding: 0px;
    column-gap: 0px`;

  descriptionInput.style.cssText = `
    display: none;`;

  addButton.style.borderRadius = "0 5px 5px 0";

  titleInput.style.cssText = `
    border: none;
    padding: 0 12.5px;
    border: 7px 0 0 7px;`;

  dateInputContainer.style.cssText = `
    display: none;`;

  caretUp.style.display = "none";
});
