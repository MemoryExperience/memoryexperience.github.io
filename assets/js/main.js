const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{loop: true, delay: 75});

typewriter.typeString('MEMORY EXPERIENCE').pauseFor(300).start();