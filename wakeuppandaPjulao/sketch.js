let forestAudio;
let pokePanda;
let wakeUp;
let aWake = 15;
let morningSun;
let panda = 0;

function preload(){
  forestAudio = loadSound("magicforest.mp3");
  pokePanda = loadSound("alarmbell.mp3");
  wakeUp = loadSound("awakebell.mp3");
}

function setup() {
  var cnv = createCanvas(800, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
  background("#F6E4D8");
  morningSun = color(255,255,0);
}

function draw() {
    //hidden click shape
    noStroke();
    fill("#f6e4d8");
    rect(170,115,210,140);
    //sunshine
    stroke(0);
    fill(morningSun);
    circle(400, 100, 50);
    //right arm
    fill('black');
    square(170,240,50,10);
    //panda drawing
    fill('black');
    //feet
    ellipse(340,180,43,30);
    circle(360,240,40);
    //ears
    fill(panda);
    circle(280,140,50);
    circle(190,170,50);
    fill("pink")
    circle(190,170,30);
    circle(280,140,30);
    //body and head
    fill("white");
    ellipse(305,220,95);
    ellipse(250,200,140,120);
    //left arm
    fill('black');
    square(260,243,50,10);
    //pandas face
    fill('black');
    ellipse(275,202,55,40);
    ellipse(210,212,50,35);
    //panda nose
    fill(panda);
    ellipse(245,230,20,10);
    //Sleeping Panda
    fill('white');
    rect(199,214,17,3);
    rect(266,206,17,3);
     //forest
    fill("#8C7961");
    rect(0,320,800,300);
    //bamboo branches
    fill("#93A603");
    rect(70,255,80,50,10);
    rect(150,255,80,50,10);
    rect(230,255,80,50,10);
    rect(310,255,80,50,10);
    rect(390,255,80,50,10);
    rect(20,10,60,100,10);
    rect(20,100,60,100,10);
    rect(20,200,60,100,10);
    rect(20,300,60,100,10);
    rect(20,400,60,100,10);
    //bamboo highlight
    fill("#D6D58E");
    rect(60,15,10,80,2);
    rect(60,105,10,80,2);
    rect(60,205,10,80,2);
    rect(60,305,10,80,2);
    rect(60,405,10,80,2);
    fill("#24590B")
    rect(0,0,15,500);
    rect(490,40,15,500)
    rect(460,40,15,500)
    //bamboo leaves
    fill("#328C08");
    triangle(120, 100, 58, 20, 86, 75);
    triangle(30, 75, 58, 20, 86, 75);
    triangle(50,150,10,50,26,475)
    triangle(300, 305, 358, 320, 286, 275);
    triangle(530, 575, 458, 220, 486, 175);
    //title text
    fill("#FFFF9C");
    textSize(40);
    textFont("Impact");
    text("Wake Up Panda", 130, 400);
    //program instructions
    fill("#FF6037");
    noStroke();
    textSize(12);
    textFont("lato");
    textSize(14)
    text("Help our sleepy Panda friend Wake Up by:",520,50);
    text("Morning song",520,80);
    text("RIGHT Arrow Play/ LEFT Arrow Stop", 520,110);
    text("Guaranteed Wake Up Call", 520, 140);
    text("Press & hold UP Arrow",520,170);
  if (keyIsPressed && keyCode === UP_ARROW) {
    fill("white");
    ellipse(199 + 17 / 2, 214 - 5, aWake, aWake);
    ellipse(266 + 17 / 2, 206 - 5, aWake, aWake);
  }
  
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    forestAudio.play();
  }
  if(keyCode === LEFT_ARROW){
    forestAudio.stop();
  }
  if(keyCode === UP_ARROW){
    wakeUp.play();
  }

}

function mousePressed(){
  if(mouseX > 170 && mouseX < 380 && mouseY > 115 && mouseY < 255)
  pokePanda.play();
}

function mouseMoved(){
  let sunShine = map(mouseX, 0, width, 0, 255);
 morningSun = lerpColor(color(255, 255, 0), color(255), sunShine / 255);
   panda = panda + 5;
  if (panda > 255) {
   panda = 0;
}
}