class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 240;
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
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
        return found
    }

    mul() {                                                                                    
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        var grassCells = this.chooseCell(1);
        var newCellG = random(grassCells);
        var mushCells = this.chooseCell(3);
        var newCellM = random(mushCells);

        if (newCell && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            predatorArr.push(new Predator(newX, newY));
            this.energy = 120;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            predatorArr.push(new Predator(newX, newY));
            this.energy = 120;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            predatorArr.push(new Predator(newX, newY));
            this.energy = 120;
            this.multiply = 0;
        }
    }

    eat() {
        const newCells = random(this.chooseCell(1));
        const newCellsGEs = random(this.chooseCell(2));
        const newCellsMush = random(this.chooseCell(3));
        const bdeath = random(this.chooseCell(27));
        if (newCells) {
            var newX = newCells[0];
            var newY = newCells[1];
            matrix[newY][newX] = 12;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
            if (newCellsGEs) {
                var newX = newCellsGEs[0];
                var newY = newCellsGEs[1];
                matrix[newY][newX] = 12;

                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                for (var i in grassEatersArr) {

                    if (newX == grassEatersArr[i].x && newY == grassEatersArr[i].y) {
                        grassEatersArr.splice(i, 1);
                        break;
                    }
                }
                this.energy + 3;
            }
                if (newCellsMush) {
                    var newX = newCellsMush[0];
                    var newY = newCellsMush[1];
                    matrix[newY][newX] = 12;

                    matrix[this.y][this.x] = 0;

                    this.x = newX;
                    this.y = newY;
                    for (var i in mushroomArr) {

                        if (this.x == mushroomArr[i].x && this.y == mushroomArr[i].y) {
                            mushroomArr.splice(i, 1);
                            break;
                        }
                    }
                }
                if (bdeath) {
                    this.die();
                }
            else {
                this.move()
            }
        }
    move() {
        this.multiply++;
        const emptCells = random(this.chooseCell(0));
        const emptCellsG = random(this.chooseCell(1));
        const emptCellsGEs = random(this.chooseCell(2));
        const emptCellsM = random(this.chooseCell(3));
        if (emptCells) {
            let newX = emptCells[0];
            let newY = emptCells[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsG) {
            let newX = emptCellsG[0];
            let newY = emptCellsG[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsGEs) {
            let newX = emptCellsGEs[0];
            let newY = emptCellsGEs[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsM) {
            let newX = emptCellsM[0];
            let newY = emptCellsM[1];
            matrix[newY][newX] = 12;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        this.energy--
        if (this.energy <= 0) {
            this.die()
        }
        if (this.multiply > 120) {
            this.mul();
        }
    }

    die() {
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
}
