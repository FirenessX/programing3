class FishsNest {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1]
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
    mul() {
        var waterCells = this.chooseCell(7);
        var newCell = random(waterCells);

        if (newCell && this.multiply >= 40) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 10;

            var newFishs = new Fishs(newX, newY, 1);
            fishsArr.push(newFishs);
            this.multiply = 0;
        }
        this.multiply++;
    }
}