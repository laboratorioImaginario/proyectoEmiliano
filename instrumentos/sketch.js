var imagenBajo;
var sonidoBajo;

var imagenBateria;
var sonidoBateria;

var imagenGuitarra;
var sonidoGuitarra;

var imagenBanda;
var sonidoBanda;

var imagenTeclado;
var sonidoTeclado;

var botonX = [];
var botonY = [];
var botonSz = [];

function setup() {
  createCanvas(1200, 600);

  analisis = new p5.Amplitude();
  analisis.setInput(sonidoBateria);

  fondo = loadImage("fondo.jpg");

  imagenBajo = loadImage("bajoGif.gif");
  sonidoBajo = loadSound("Bajo-1.mp3");
  logoBajo = loadImage("Bajo.png")

  imagenBateria = loadImage("bateriaGif.gif");
  sonidoBateria = loadSound("Bateria.mp3");
  logoBateria = loadImage("Bateria.png")


  imagenGuitarra = loadImage("guitarraGif.gif");
  sonidoGuitarra = loadSound("Guitarra.mp3");
  logoGuitarra = loadImage("Guitarra.png")


  imagenTeclado = loadImage("tecladoGif.gif");
  sonidoTeclado = loadSound("Teclado.mp3");
  logoTeclado = loadImage("Teclado.png")

  logoBanda = loadImage("Banda.png")
  sonidoBanda = loadSound("Banda.mp3");

  mouse= loadImage("mouse.png")
  
  var steps = height / 5;
  for (var i = 0; i < height; i += steps) {
    botonX = append(botonX, 100);
    botonY = append(botonY, i + 60);
    botonSz = append(botonSz, 50);
  }
}

function draw() {
  background(255);
  imageMode(CORNER);
  image(fondo, 0, 0, 1200, 600);

  var valor = analisis.getLevel();

  fill(255, 255, 100, 150);
  ellipse(width / 2, height / 2, valor * 3000, valor * 3000);



  for (var i = 0; i < botonX.length; i += 1) {
    fill(255, 0, 0);
   // imageMode(CENTER)
    ellipse(botonX[i], botonY[i], botonSz[i], botonSz[i]);
    //image (     ,0,0,50,50);

    fill(0, 0, 255,0);
    strokeWeight(0)
    imageMode(CENTER)
    ellipse(mouseX, mouseY, botonSz[i], botonSz[i]);
    image(mouse,mouseX, mouseY,50,50)

    var d = dist(botonX[i], botonY[i], mouseX, mouseY);
    
    
if(botonY[i] == botonY[0]){
  imageMode(CENTER)
image(logoBajo,botonX[i], botonY[i], 170, 90);
}

    if(botonY[i] == botonY[1]){
  imageMode(CENTER)
image(logoBateria,botonX[i], botonY[i], 170, 90);
}

   if(botonY[i] == botonY[2]){
  imageMode(CENTER)
image(logoGuitarra,botonX[i], botonY[i], 170, 90);
}
    
   if(botonY[i] == botonY[3]){
  imageMode(CENTER)
image(logoTeclado,botonX[i], botonY[i], 170, 90);
}
    
   if(botonY[i] == botonY[4]){
  imageMode(CENTER)
image(logoBanda,botonX[i], botonY[i], 170, 90);
}
    
    
    
    
    if (d <= botonSz[i]) {
      if (mouseIsPressed) {
        if (botonY[i] == botonY[0]) {
          imageMode(CENTER);
          image(imagenBajo, 720, 350, 420, 420);

          if (sonidoBajo.isPlaying()) {
          } else {
            sonidoBajo.play();
            sonidoBateria.stop();
            sonidoGuitarra.stop();
            sonidoTeclado.stop();
            sonidoBanda.stop();

          }
        }

        if (botonY[i] == botonY[1]) {
          imageMode(CENTER);
          image(imagenBateria, 700, 350, 400, 400);

          if (sonidoBateria.isPlaying()) {
          } else {
            sonidoBateria.play();
            sonidoBajo.stop();
            sonidoGuitarra.stop();
            sonidoTeclado.stop();
            sonidoBanda.stop();
          }
        }

        if (botonY[i] == botonY[2]) {
          imageMode(CENTER);
          image(imagenGuitarra, 700, 350, 400, 400);

          if (sonidoGuitarra.isPlaying()) {
          } else {
            sonidoGuitarra.play();
            sonidoBajo.stop();
            sonidoBateria.stop();
            sonidoTeclado.stop();
            sonidoBanda.stop();
          }
        }

        if (botonY[i] == botonY[3]) {
          imageMode(CENTER);
          image(imagenTeclado, 720, 350, 420, 420);

          if (sonidoTeclado.isPlaying()) {
          } else {
            sonidoTeclado.play();
            sonidoBajo.stop();
            sonidoGuitarra.stop();
            sonidoBateria.stop();
            sonidoBanda.stop();
          }
        }

        if (botonY[i] == botonY[4]) {
          imageMode(CENTER);
          image(imagenGuitarra, 400, 400, 266, 266);

          imageMode(CENTER);
          image(imagenTeclado, 600, 400, 300, 300);

          imageMode(CENTER);
          image(imagenBateria, 850, 400, 300, 300);

          imageMode(CENTER);
          image(imagenBajo, 1080, 380, 350, 350);

          if (sonidoBanda.isPlaying()) {
          } else {
            sonidoBanda.play();
            sonidoBajo.stop();
            sonidoGuitarra.stop();
            sonidoTeclado.stop();
            sonidoBateria.stop();
          }
        }
      }
    }
  }
}
