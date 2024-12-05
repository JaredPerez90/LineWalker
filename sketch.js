let randomWalker = [];
let maxWalkers;
let colorPalette = ['green','blue','orange','pink','red']
function setup() {
  createCanvas(400, 400);
    background('red');
  
  maxWalkers = 5
  
  for (i = 0; i < maxWalkers; i++)
    {    randomWalker.push(new                       walker(random(0,width),random(0,height),random(-5,10),colorPalette[i]))
    }
  

  
}

function draw() {
  
  for(i = 0; i < maxWalkers; i++)
{
  randomWalker[i].display();
  randomWalker[i].walkingDirection();
  randomWalker[i].keepInCanvas();
}
  
  
}

