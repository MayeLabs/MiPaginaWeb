document.addEventListener("DOMContentLoaded", function() {
    const rocket = document.getElementById("rocket");
    let x = 50;
    let y = 50;
    const speed = 10;

    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "ArrowUp":
                y -= speed;
                break;
            case "ArrowDown":
                y += speed;
                break;
            case "ArrowLeft":
                x -= speed;
                break;
            case "ArrowRight":
                x += speed;
                break;
        }
        rocket.style.left = x + "px";
        rocket.style.top = y + "px";
    });
});