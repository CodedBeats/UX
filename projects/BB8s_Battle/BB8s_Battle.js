// Set up the canvas element
let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set up the context for drawing
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Generate red laser beams at short random intervals
let lasers = [];
setInterval(function () {
    if (Math.random() < 0.5) {
        lasers.push({
            x: canvas.width,
            y: Math.floor(Math.random() * canvas.height),
            length: Math.floor(Math.random() * 200) + 50,
        });
    }
}, 100);

// Draw the red laser beams
function draw() {
    // Clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // adjust color
    ctx.strokeStyle = "red";
    // adjust thickness
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    for (let i = 0; i < lasers.length; i++) {
        ctx.beginPath();
        ctx.moveTo(lasers[i].x, lasers[i].y);
        ctx.lineTo(lasers[i].x - lasers[i].length, lasers[i].y);
        ctx.stroke();
        // adjust speed
        lasers[i].x -= 60;
        if (lasers[i].x < -lasers[i].length) {
            lasers.splice(i, 1);
            i--;
        }
    }

    // Call the draw function again
    requestAnimationFrame(draw);
}

// Start the animation loop
requestAnimationFrame(draw);