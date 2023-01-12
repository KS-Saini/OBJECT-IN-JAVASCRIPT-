// var canvas;
// var sprite, spritesGroup;
// var tower, ground;
// var colorlist = ['aqua', 'red', 'blue', 'yellow', 'green', 'pink', 'skyblue', 'maroon', 'white'];

// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;



// let engine;
// let world;

// function setup() {
//     createCanvas(1500, 680);
//     engine = Engine.create();
//     world = engine.world;
//     // sk = createSprite(width / 2 - 500, height / 2 + 169, 30, 30);
//     // sk.velocityY = sk.velocityY - 0.8
//     var options = {
//         friction: 0.02,
//         isStatic: true
//     }
//     ground = Bodies.rectangle(300, 200, 20, 20, options)
//     World.add(world, ground);

//     rectMode(CENTER)
//     spritesGroup = new Group();
//     heading = createElement("h1");
// }

// function draw() {
//     background("aqua");

//     Engine.update(engine)
//     rect(ground.position.x, ground.position.y, 30, 30);

//     heading.class("heading")
//     heading.html("HI HELLO")
//     heading.style('color:red');
//     heading.style('fontSize:30px')
//     heading.position(150, 20)

//     spawnGround();
//     drawSprites();
// }
// function spawnGround() {
//     if (frameCount % 117 === 0) {
//         sprite = createSprite(width / 2, height / 2 + 260, 300, 150);
//         sprite.x = Math.round(random(-10, 10))
//         sprite.shapeColor = random(colorlist);
//         sprite.velocityX = 5;
//         sprite.lifetime = 600;
//         spritesGroup.add(sprite);
//         console.log(spritesGroup)
//     }
// }
