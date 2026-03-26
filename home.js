let cols, rows;
let size = 10;
let t = 0;
let sketch1 = "cloudsketch.html";
let sketch2 = "p1.html";
let sketch3 = "p2.html";
let distClickToCenter = dist(mouseX, mouseY, width / 2, height / 2);


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / size;
  rows = height / size;
  textSize(size);
  textAlign(CENTER, CENTER);
}

function mouseClicked() {
  // 1. Calculate how far the click is from the center
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  // 2. Check which "Ring" the click landed in
  
  if (d < 200) {

    window.open(sketch1, "_self"); 
  } 
  else if (d >= 250 && distClickToCenter < 500) {
    
    window.open(sketch2, "_self");
  } 
  else if (d >= 600 && distClickToCenter) {
  
    window.open(sketch3, "_self");
  }
}
function draw() {
  background(255, 192, 203);

  let distMouseToCenter = dist(mouseX, mouseY, width / 2, height / 2);

  // Update cursor
  if (distMouseToCenter < 750) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let distFromCenter = dist(x, y, width / 2, height / 2);
      
      let dx = x - width / 2;
      let dy = y - height / 2;
      let angle = atan2(dy, dx);
      
      let k = 10;
      let spiralPath = sin(distFromCenter / k + angle + t);
      
      let distanceFactor = 100;
      let angleFactor = 5;
      let condition = sin(distFromCenter / distanceFactor + angleFactor * angle);
      
      let symbol;
      let fillColor = color(255, 255, 255);
      
      if (spiralPath > condition) {
        symbol = "<3";
        fillColor = colorGradient(distFromCenter);
      } else {
        // --- HOVER LOGIC START ---
        if (distFromCenter < 200) {
          symbol = "1";
          // If the mouse is also in Zone 1, turn hot pink
          if (distMouseToCenter < 200) {
            fillColor = color(216, 191, 216);
          }
        } else if (distFromCenter >= 250 && distFromCenter < 500) {
          symbol = "2";
          // If the mouse is also in Zone 2, turn hot pink
          if (distMouseToCenter >= 250 && distMouseToCenter < 500) {
            fillColor = color(216, 191, 216);
          }
        } else if (distFromCenter >= 550 && distFromCenter < 900) {
          symbol = "3";
          // If the mouse is also in Zone 3, turn hot pink
          if (distMouseToCenter >= 550 && distMouseToCenter < 900) {
            fillColor = color(216, 191, 216);
          }
        } else {
          symbol = ".";
        }
      }
      fill(fillColor);
      text(symbol, x, y);
    }
  }
  t -= 0.05;
}

function colorGradient(dValue) {
  let color1 = color(135, 206, 235); 
  let color2 = color(131, 58, 180);  
  let colorRadius = 300; 
  let amt = (dValue % colorRadius) / colorRadius;
  
  return lerpColor(color1, color2, amt);
}

// function mouseClicked() {
//   // 1. Calculate how far the click is from the center
//   let distClickToCenter = dist(mouseX, mouseY, width / 2, height / 2);

//   // 2. Check which "Ring" the click landed in
  
//   if (distClickToCenter < 200) {
//     // INNER CIRCLE (0 to 50px from center)
//     window.open(sketch1, "_self"); 
//   } 
//   else if (distClickToCenter >= 250 && distClickToCenter < 500) {
//     // MEDIUM CIRCLE (50px to 100px from center)
//     window.open(sketch2, "_self");
//   } 
//   else if (distClickToCenter >= 500 && distClickToCenter) {
//     // OUTER CIRCLE (100px to 150px from center)
//     window.open(sketch3, "_self");
//   }
// }