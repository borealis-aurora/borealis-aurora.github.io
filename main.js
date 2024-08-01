//Este es un comentario
//console.log("Hola mundo! desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Lic. en Física | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar,')
    .pauseFor(2500)
    .deleteChars(24)
    .typeString('<strong>lo puedes programar!</strong>')
    .pauseFor(2500)
    .start();