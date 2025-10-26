let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y = 10;

    // code to create a new square sprite
    sq = new Sprite();
    sq.x = width/2;
    sq.y = height/2;
    sq.width = 30;
    sq.height = 30;
}

function draw(){
    background("grey");

    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
        if (mouse.presses()){
            sq.vel.y = -5

        }
}
