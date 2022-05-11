for (let button of document.querySelectorAll("section button")) {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
}

for (let button of document.querySelectorAll("section button")) {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  this.parentNode.classList.toggle('liked')});
}
