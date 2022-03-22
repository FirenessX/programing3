class Alligator {
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
        return super.chooseCell(character);
    }
    move() {
        const waterCells = random(this.chooseCell(7));
        if (waterCells) {
            let newX = waterCells[0];
            let newY = waterCells[1];
            matrix[newY][newX] = 13;
            matrix[this.y][this.x] = 15;
            this.x = newX;
            this.y = newY;
        }
    }
}
