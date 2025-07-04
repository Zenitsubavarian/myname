function startMusic() {
  const popup = window.open('music.html', 'musicWindow', 'width=300,height=100');
  if (popup) {
    popup.focus();
  } else {
    alert('Please allow popups to play the song.');
  }
}

function goToNext() {
  window.location.href = 'page2.html';
}

// 🎈 Balloon animation
const canvas = document.getElementById('balloon-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = [];
for (let i = 0; i < 40; i++) {
  balloons.push({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 300,
    r: Math.random() * 15 + 10,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`,
    speed: Math.random() * 1.2 + 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
    b.y -= b.speed;
    if (b.y < -b.r) {
      b.y = canvas.height + b.r;
      b.x = Math.random() * canvas.width;
    }
  });
}
setInterval(draw, 30);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// PAGE 2: Confetti Party Poppers
if (window.location.pathname.includes('page2')) {
  const canvas = document.getElementById('popper-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#ff4081', '#ffcd56', '#4bc0c0', '#9966ff', '#36a2eb'];

  function createParticle() {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    return {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 100
    };
  }

  for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.life--;

      if (p.life <= 0) {
        particles[index] = createParticle();
      }
    });
  }

  setInterval(drawParticles, 30);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
function playSound() {
  const audio = document.getElementById("popSound");
  audio.currentTime = 0;
  audio.play();
}
