var bg,bg2,form,system,code,security,font1,font2;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  font1 = loadFont("chalkboard-se-bold.ttf");
  font2 = loadFont("chalkboard-se-regular.ttf");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  textFont(font2)
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textFont(font1)
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}