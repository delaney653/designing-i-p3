document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        document.getElementById("back-button").click();
    }
    if (event.key === "ArrowRight") {
        event.preventDefault();
        document.getElementById("banana").click();
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        document.getElementById("orange").click();
    }
    if (event.key === "ArrowDown") {
        event.preventDefault();
        document.getElementById("strawberry").click();
    }
});