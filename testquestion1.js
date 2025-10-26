let bird;
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    birdImg = loadImage( '/assets/bird.png');
    background = loadImage('/assets/background.png');
    // refer to assets folder
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite();
    bird.x = width/2;
    bird.y = height/2;
    bird.width = 30;
    bird.height = 30;
    bird.img = birdImg;

}

function draw(){
    image(background, 0, 0, width, height);
    
}
