document.addEventListener("DOMContentLoaded", function() {
    const rocket = document.getElementById("rocket");
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const hamburger = document.getElementById("hamburger-menu");
    const navbar = document.getElementById("navbar");

    let x = 50;
    let y = 50;
    const speed = 10;
    let gameStarted = false;
    
    startButton.addEventListener("click", function(){
        startScreen.style.display = "none";
        gameStarted = true;

    })

    document.addEventListener("keydown", function(event) {
        if (!gameStarted) return;
        else {
            if ( event.key === "ArrowUp" || event.key === "ArrowDown" ||
                 event.key === "ArrowLeft" || event.key === "ArrowRight"  )
            {
                    event.preventDefault();
            }
        }
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

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
      
});



