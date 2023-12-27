const app = document.getElementById('typewriter');
const app2 = document.getElementById('typewriter2');
const app3 = document.getElementById('typewriter3');

const typewriter = new Typewriter(app,{loop: true, delay: 75});
const typewriter2 = new Typewriter(app2,{loop: true, delay: 75});
const typewriter3 = new Typewriter(app3,{loop: true, delay: 75});

typewriter.typeString('MEMORY EXPERIENCE').pauseFor(300).start();
typewriter2.typeString('APRENDE SIN LÍMITES').pauseFor(300).start();
typewriter3.typeString('APRENDE A ESTUDIAR').pauseFor(300).start();