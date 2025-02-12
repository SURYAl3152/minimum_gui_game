const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let target = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: 50,
};

function drawTarget() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const distance = Math.sqrt((mouseX - target.x) ** 2 + (mouseY - target.y) ** 2);
  if (distance < target.size) {
    alert("You hit the target!");
    target.x = Math.random() * canvas.width;
    target.y = Math.random() * canvas.height;
  }
});

setInterval(drawTarget, 16);
