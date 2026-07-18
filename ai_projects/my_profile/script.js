// Typing animation

const words = [
  "Junior Software Developer",
  "Frontend Engineer",
  "Full Stack Developer",
  "Future Tech Builder",
];

let i = 0;
let j = 0;
let deleting = false;

function typing() {
  let word = words[i];

  if (!deleting) {
    document.getElementById("typing").textContent = word.substring(0, j++);

    if (j > word.length) {
      deleting = true;

      setTimeout(typing, 1000);

      return;
    }
  } else {
    document.getElementById("typing").textContent = word.substring(0, j--);

    if (j < 0) {
      deleting = false;

      i++;

      if (i >= words.length) i = 0;
    }
  }

  setTimeout(typing, deleting ? 50 : 100);
}

typing();

// Floating particles

const container = document.getElementById("particles");

for (let i = 0; i < 60; i++) {
  let p = document.createElement("div");

  p.style.position = "fixed";

  p.style.width = "5px";

  p.style.height = "5px";

  p.style.background = "#00eaff";

  p.style.borderRadius = "50%";

  p.style.left = Math.random() * 100 + "vw";

  p.style.top = Math.random() * 100 + "vh";

  p.style.opacity = Math.random();

  p.style.animation = `move ${5 + Math.random() * 10}s infinite linear`;

  container.appendChild(p);
}

const style = document.createElement("style");

style.innerHTML = `

@keyframes move{

from{

transform:translateY(0);

}


to{

transform:translateY(-120vh);

}

}

`;

document.head.appendChild(style);
