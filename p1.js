let hearts = [];
const cols = 3;
const rows = 3
let totalBroken = 0;
 let a 

let heartPerfect, heartCracked1, heartCracked2;

function preload() {
  heartPerfect = loadImage('images/perfect.png');
  heartCracked1 = loadImage('images/crackedheart1.png')
  heartCracked2 = loadImage('images/crackedheart2.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255); 
  imageMode(CENTER); 
 angleMode(DEGREES)
 
a=createA('p2.html', 'CONGRATS');
a.style('color', '963200');
a.style('font-family', 'Courier New');
a.hide();
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      hearts.push(new PorcelainHeart(
        i * width/cols + width/cols / 2, 
        j * (height-100)/rows + 150, 
        width/cols * 0.9 
      ));
    }
  }

  random(hearts).winner = true;
}

function draw() {
  
 background(255)

  textAlign(CENTER);
  textFont('Courier New');
  textSize(24);
  noStroke();
  fill(150, 0, 50);
  text("SMASH THE PORCELAIN HEARTS TO MOVE TO THE NEXT PAGE!", width / 2, 40);
  textAlign(CENTER);
  textFont('Courier New');
  textSize(15);
  noStroke();
  fill(150, 0, 50);
  text("only one smashed heart will take you to the next page", width / 2, height-50);
  for (let heart of hearts) {
    heart.display();
  }
}

function mousePressed() {
for (let heart of hearts) {
    if (heart.isActive && heart.mouseClicked(mouseX, mouseY)) {
      heart.hit();
    }
  }
}

class PorcelainHeart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 130; 
    this.hits = 0
    this.maxHits = 4
    this.isActive = true;
    this.winner = false
    
  
  }
  display() {

  
  if (this.hits == 0) {
    image(heartPerfect, this.x, this.y, this.size, this.size+29);
  } 
  else if (this.hits == 1) {
    image(heartCracked1, this.x, this.y, this.size, this.size+29);
  } 
  else if (this.hits == 2){
    image(heartCracked2, this.x, this.y, this.size, this.size+29);
  }
  else if (this.hits == 3){
  if(this.winner){
    a.position(this.x-30, this.y);
    a.show();
  } else {
    fill(150, 0, 50)
    textSize(18)
    text("try again", this.x, this.y);
  }
}
  }
  
  mouseClicked(mouseX, mouseY){
      return dist(mouseX, mouseY, this.x, this.y) < this.size / 2
    }
    hit() {
    if (this.hits < this.maxHits - 1) {
    this.hits++;
  } else {
    this.isActive = false; 
    }
    }}