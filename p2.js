let song;
let fft;
let xPos = 0;
let speed = 4; 
let message = "press to play and pause"
let lyrics = "Let me be a dreamer Let me float I can see the whole world From my own little cloud Up by the Milky Way I'll stay here forever and a day You can't pin me down I fear all solid ground I'd rather be alone at tea Love when nobody's makin' me Oh, boys just make me cry Believe me, I have tried I've made my rounds Kissed some mouths Trust me, I don't want a single soul around Oh, I'm givin' up I'm throwing in my hat I can't take another lifeless little chat I'm moving up into a cloud, into my fantasy And no boy's gonna be so smart as to Try and pierce my porcelain heart No boy's gonna kill the dreamer in me Some might call me mad The worst this town has had I fell right down the rabbit hole Legends say, I fell so fast I lost my soul Oh, my melancholic days (melancholic days) Are few and far away I've had enough, called it off As far as I'm concerned, this witch is numb to love Oh, I'm giving up I'm throwing in my hat I can't take another lifeless little chat I'm moving up into a cloud, into my fantasy And no boy's gonna be so smart as to (be so smart) Try and pierce my porcelain heart (porcelain heart) And no boy's gonna kill the dreamer in me And no boy's gonna be so smart as to Try and pierce my porcelain heart No boy's gonna kill the dreamer in me... ";
let lyricsX;
let a
function preload() {
  song = loadSound("Dreamer.m4a");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(142,69,133);
    messageX = width;
    lyricsX = width;    
  angleMode(DEGREES);
  fft = new p5.FFT();
  a=createA('index.html', 'return home');
  a.style('color', '#ffc0cb');
  
}

let point0;

function draw() {
  let playbackSpeed = map(mouseX, 0, width, 1, 0.1);
background(142,69,133);
  fill(244,194,194);
  textFont('Courier New');
  textSize(16);
  textAlign(CENTER);
  text(message, width/2, 40);

  a.position(width/2, height-40)
  
//   messageX -= speed;
// if (messageX < -textWidth(message)) {
//   messageX = width;
// }

  if (song.isPlaying()) {
  fill(244,194,194);
  textSize(25);
  textAlign(LEFT);
  text(lyrics, lyricsX, height/2 +70);
    lyricsX -= 4.8* playbackSpeed;

  if (lyricsX < -textWidth(lyrics)) {
    lyricsX = width;
  }
  }



  // let playbackSpeed = map(mouseX, 0, width, 1, 0.1);


  song.setVolume(0.8);


  let spectrum = fft.analyze();
  // print(spectrum.length)
 push();
    translate(0, 0); // Origin at top left
    drawVisualizer(spectrum);
  pop();


  push();
    translate(width, 0); 
    scale(-1, 1);        
    drawVisualizer(spectrum);
  pop();
}
  // noStroke();

  
  
function drawVisualizer(spectrum) {
  noFill()
  stroke(255, 0, 255)
  strokeWeight(2)
  beginShape();
  for (let i = 0; i < spectrum.length/4; i++) {
   let angle = map(i, 0, spectrum.length, 0, 360);
    
    let j = map(i,0,spectrum.length/4, 0, 360)
    
    let x = sin(j);
    let y = cos(j);
    let f = spectrum[i];
//  curveVertex(x * scale, y * scale);
    
    radius = f*4
    curveVertex(x*radius, y*radius)
    
    if(i<1){
      point0 = [x*f, y*f]    
    }
  }
  // print(point0[0],point0[1])
  curveVertex(point0[0],point0[1])
  
  endShape(CLOSE)}


// let counter = 0;}
// function mousePressed() {
//   if (counter % 2 == 0) {
//     // background(0, 255, 0);
//     song.loop();
//     fill(244,194,194);
//     textFont('Courier New');
//     textSize(32);
//     textAlign(LEFT, CENTER);
  
//     text(lyrics, xPos, height / 2);
  
//     xPos -= speed; 
//     if (xPos < -textWidth(message)) {
//     xPos = width;
//     }
  
//   } else {
//     song.pause();
    // background(200, 0, 0);
    
//   }

//   counter++;
// }
function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}