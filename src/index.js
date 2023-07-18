console.log("it works");
const canvas = document.querySelector("#touch-me");
const ctx = canvas.getContext("2d");
const shakebtn = document.querySelector(".shake");
const size = 20;
let color = 0;

//setup for canvas
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

const { width } = canvas;
const { height } = canvas;
console.log(width, height);

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.strokeStyle = `hsl(${color},100%,50%)`;
ctx.beginPath(); //starts
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  color = color + 10;
  ctx.strokeStyle = `hsl(${color},100%,50%)`;
  ctx.beginPath(); //starts
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y = y - size;
      break;
    case "ArrowDown":
      y = y + size;
      break;
    case "ArrowLeft":
      x = x - size;
      break;
    case "ArrowRight":
      x = x + size;
      break;
    default:
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handlekey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

function clearcanvas() {
  canvas.classList.add("buttons");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener("animationend", function () {
    canvas.classList.remove("buttons");
  });
}

window.addEventListener("keydown", handlekey);

shakebtn.addEventListener("click", clearcanvas);
