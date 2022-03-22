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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    
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