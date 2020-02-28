//You can adjust the canvas size to your liking, but it's adviced to have it be divisible by 'cellSize'
const canvasWidth = 1024;
const canvasHeight = 640;
var img;
var cellSize = 8;
var imgGrid;
var counter = 0;


var temp;

function preload() 
{
  
    img = new Picture('assets/test.png',8);
}

function setup() 
{    
    createCanvas(canvasWidth,canvasHeight);  

    img.gridCreate();
    noLoop();
}

function draw()
{
    //Feel free to change the background color:
    background(35);

    image(img.img, 0, 0);
   

    for(var y = 0; y < img.gridY; y++)
    {
        for(let x = 0; x < img.gridX; x++)
        {
            img.grid[x][y] = get((x*(img.cellSize)),y*(img.cellSize));
        }
    }

    let numb = Math.floor(Math.random() * 3)
    
    clear();
    background(35);
    for(var y = 0; y < img.gridY; y++)
    {
        for(let x = 0; x < img.gridX; x++)
        {
            stroke(0,0);
            let color = img.grid[x][y];
            fill(...color);
            //noFill();
            //stroke(...color);
            circle(((img.cellSize*3)+x*(img.cellSize * 2)),((img.cellSize*3)+y*(img.cellSize * 2)),img.cellSize * 2);
            circle(((img.cellSize*numb)+x*(img.cellSize * 2)),((img.cellSize*numb)+y*(img.cellSize * 2)),img.cellSize * 2);
            
            
        }
    }

}