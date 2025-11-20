document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("back-button").click();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("banana").click();
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("orange").click();
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("strawberry").click();
  }
}); 