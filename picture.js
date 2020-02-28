class Picture
{
    constructor(path, cellSize)
    {
        
        this.img;   
        this.width;
        this.height;
        this.cellSize = cellSize;
        this.gridX;
        this.gridY;
        this.grid;

        this.load(path);
    }

    load (path)
    {
        this.img = loadImage(path);
    }

    gridCreate()
    {
      
        this.gridX = this.img.width / this.cellSize;
        this.gridY = this.img.height/ this.cellSize;

        this.grid = [this.gridX];

        for(let i = 0; i < this.gridX; i++)
        {
            this.grid[i] = [this.gridY];
        }
    }

   
}