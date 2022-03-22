class SecAlligator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }

    chooseCell(character) {
        this.getNewCordinates()
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

    move() {
        const waterCells = random(this.chooseCell(7));
        if (waterCells) {
            let newX = waterCells[0];
            let newY = waterCells[1];
            matrix[newY][newX] = 18;
            matrix[this.y][this.x] = 20;
            this.x = newX;
            this.y = newY;
        }
    }
}