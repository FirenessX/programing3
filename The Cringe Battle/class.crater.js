class Crater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.CD = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    cr() {
        this.CD++;
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        var GCells = this.chooseCell(1);
        var newCellG = random(GCells);
        var GECells = this.chooseCell(2);
        var newCellGE = random(GECells);
        var MCells = this.chooseCell(3);
        var newCellM = random(MCells);
        var PCells = this.chooseCell(12);
        var newCellP = random(PCells);
        var CCells = this.chooseCell(27);
        var newCellC = random(CCells);
        var CCells2 = this.chooseCell(29);
        var newCellC2 = random(CCells2);
        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 1) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellGE && this.multiply >= 1) {
            var newX = newCellGE[0];
            var newY = newCellGE[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 1) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellP && this.multiply >= 1) {
            var newX = newCellP[0];
            var newY = newCellP[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellC) {
            this.dissappear();
        }
        if (newCellC2) {
            this.dissappear();
        }
        if (this.CD >= 9) {
            this.dissappear();
        }
    }
    dissappear() {
        for (var i in craterArr) {
            if (this.x == craterArr[i].x && this.y == craterArr[i].y) {
                craterArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
}