class Caviar{
    constructor (x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.time = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],
            
        ];   
    }
    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mul() {

        var waterCells = this.chooseCell(7);
        const aldieCells = random(this.chooseCell(13));
        const secaldieCells = random(this.chooseCell(18));
        var newCell = random(waterCells);
        if (this.time < 0) {
            this.stop();
        }
        if (aldieCells) {
            this.stop();
        }
        if (secaldieCells) {
            this.stop();
        }
        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 10;

            var newFishs = new Fishs(newX, newY, 1);
            fishsArr.push(newFishs);
            this.multiply = 0;
        }
        this.multiply++;
        this.time--;
    }
    stop() {
        for (var i in caviarArr) {
            if (this.x == caviarArr[i].x && this.y == caviarArr[i].y) {
                caviarArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}
