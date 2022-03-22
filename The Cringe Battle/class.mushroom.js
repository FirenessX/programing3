class Mushroom{
    constructor (x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x    , this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y    ],
            [this.x + 5, this.y    ],
            [this.x - 5, this.y + 5],
            [this.x    , this.y + 5],
            [this.x + 5, this.y + 5],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul () {
        
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.multiply >= 70){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
    
            var newMushroom = new Mushroom(newX, newY, 1);
            mushroomArr.push(newMushroom);
            this.multiply = 0;
        }
        this.multiply++;
    }
}