class Grass {
    constructor (x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.multiply >= 1){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
    
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
        this.multiply++;
    }
}

class GrassEaters {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.multiply = 0;
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
        return found;
    }

    mul() {

        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var mushCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        var newCellG = random(grassCells);
        var newCellM = random(mushCells);

        if (newCell && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        this.multiply++;
    }
    eat() {
        const newCells = random(this.chooseCell(1));
        const newCellsMush = random(this.chooseCell(3));
        const bdeath = random(this.chooseCell(27));
        const cdeath = random(this.chooseCell(29));
            if (newCells) {
                var newX = newCells[0];
                var newY = newCells[1];
                matrix[newY][newX] = 2;

                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                for (var i in grassArr) {

                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            if (newCellsMush) {
                var newX = newCellsMush[0];
                var newY = newCellsMush[1];
                matrix[newY][newX] = 2;
    
                matrix[this.y][this.x] = 0;
    
                this.x = newX;
                this.y = newY;
                for (var i in mushroomArr) {
    
                    if (newX == mushroomArr[i].x && newY == mushroomArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                this.energy - 3;
            }
            if (bdeath){
                this.die();
            }
            if (cdeath){
                this.die();
            }
            this.energy++
            if (this.energy > 30){
                this.mul();
            }
        }
        else {
            this.move()
        }




    }

    move() {
        const emptCells = random(this.chooseCell(0));
        const emptCellsG = random(this.chooseCell(1));
        const emptCellsM = random(this.chooseCell(3));
        if (emptCells) {
            let newX = emptCells[0];
            let newY = emptCells[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsG) {
            let newX = emptCellsG[0];
            let newY = emptCellsG[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 1;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsM) {
            let newX = emptCellsM[0];
            let newY = emptCellsM[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 3;
            this.x = newX;
            this.y = newY;
        }
        this.energy--
        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        for(var i in grassEatersArr){
            if (this.x== grassEatersArr[i].x && this.y == grassEatersArr[i].y) {
                grassEatersArr.splice(i,1);
                break;
            }
        }
        matrix[this.y][this.x]=0
    }
}

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

class Creator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 50
        this.multiply = 0;
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
        return found;
    }

    mul1() {
        let found = this.chooseCell(0)
        let newCell = random(found);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            grassArr.push(new Grass(newX, newY));
        }
    }
    mul2() {
        let found = this.chooseCell(0);
        let newCell = random(found);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            mushroomArr.push(new Mushroom(newX, newY));
        }
        else {
            this.move()
        }
    }
    move() {
        const emptCells = random(this.chooseCell(0));
        const emptCellsG = random(this.chooseCell(1));
        const emptCellsM = random(this.chooseCell(3));
        if (emptCells) {
            let newX = emptCells[0];
            let newY = emptCells[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsG) {
            let newX = emptCellsG[0];
            let newY = emptCellsG[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 1;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsM) {
            let newX = emptCellsM[0];
            let newY = emptCellsM[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 3;
            this.x = newX;
            this.y = newY;
        }
        this.energy--
        if (this.energy <= 0) {
            this.quit()
        }
    }
    quit() {
        for (var i in creatorArr) {
            if (this.x == creatorArr[i].x && this.y == creatorArr[i].y) {
                creatorArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 1
    }
}

class Nest {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y]
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

        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var mushCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        var newCellG = random(grassCells);
        var newCellM = random(mushCells);

        if (newCell && this.multiply >= 30) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        if (newCellG && this.multiply >= 30) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        if (newCellM && this.multiply >= 30) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        this.multiply++;
    }
}

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

class Fishs{
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.energy = 90;
            this.multiply = 0;
            this.directions = []
        }
    
        getNewCordinates() {
            this.directions = [
                [this.x + 1, this.y - 1],
                [this.x + 1, this.y],
                [this.x + 1, this.y + 1],
                [this.x - 1, this.y],
                [this.x - 1, this.y - 1],
                [this.x - 1, this.y + 1],
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
    
        mul() {
            this.multiply++;
            var waterCells = this.chooseCell(7);
            var newCell = random(waterCells);
    
            if (newCell && this.multiply >= 70) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 11;
                matrix[this.y][this.x] = 7;
                caviarArr.push(new Caviar(newX, newY));
                this.multiply = 0;
            }
            else {
                this.move()
            }
        }
        move() {
            const waterCells = random(this.chooseCell(7));
            const aldieCells = random(this.chooseCell(13));
            const secaldieCells = random(this.chooseCell(18));
            if (waterCells) {
                let newX = waterCells[0];
                let newY = waterCells[1];
                matrix[newY][newX] = 10;
                matrix[this.y][this.x] = 7;
                this.x = newX;
                this.y = newY;
                this.energy--;
            }
            if (this.energy <= 0) {
                this.die();
            }
            if (aldieCells) {
                this.die();
            }
            if (secaldieCells) {
                this.die();
            }
        }
        die() {
            for(var i in fishsArr){
                if (this.x== fishsArr[i].x && this.y == fishsArr[i].y) {
                    fishsArr.splice(i,1);
                    break;
                }
            }
        matrix[this.y][this.x] = 7
    }
}

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
            matrix[newY][newX] = 13;
            matrix[this.y][this.x] = 15;
            this.x = newX;
            this.y = newY;
        }
    }
}

class AlBone {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    NaN(){
        for (var i in alBoneArr) {
            if (this.x == alBoneArr[i].x && this.y == alBoneArr[i].y) {
                alBoneArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}

class AlBoneBase {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    NaN(){
        for (var i in alBoneBaseArr) {
            if (this.x == alBoneBaseArr[i].x && this.y == alBoneBaseArr[i].y) {
                alBoneBaseArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}

class AlligatorBase {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        return found;
    }
    move() {
        const aCells = random(this.chooseCell(15));
        if (aCells) {
            let newX = aCells[0];
            let newY = aCells[1];
            matrix[newY][newX] = 14;
            matrix[this.y][this.x] = 17;
            this.x = newX;
            this.y = newY;
        }
    }
}

class AlligatorTale {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        return found;
    }
    move() {
        const aCells = random(this.chooseCell(17));
        if (aCells) {
            let newX = aCells[0];
            let newY = aCells[1];
            matrix[newY][newX] = 16;
            matrix[this.y][this.x] = 7;
            this.x = newX;
            this.y = newY;
        }
    }
}

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

class SecAlBone {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    NaN(){
        for (var i in secAlBoneArr) {
            if (this.x == secAlBoneArr[i].x && this.y == secAlBoneArr[i].y) {
                secAlBoneArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}

class SecAlBoneBase {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    NaN(){
        for (var i in secAlBoneBaseArr) {
            if (this.x == secAlBoneBaseArr[i].x && this.y == secAlBoneBaseArr[i].y) {
                secAlBoneBaseArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}

class SecAlligatorBase {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        return found;
    }
    move() {
        const aCells = random(this.chooseCell(20));
        if (aCells) {
            let newX = aCells[0];
            let newY = aCells[1];
            matrix[newY][newX] = 19;
            matrix[this.y][this.x] = 22;
            this.x = newX;
            this.y = newY;
        }
    }
}

class SecAlligatorTale {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        return found;
    }
    move() {
        const aCells = random(this.chooseCell(22));
        if (aCells) {
            let newX = aCells[0];
            let newY = aCells[1];
            matrix[newY][newX] = 21;
            matrix[this.y][this.x] = 7;
            this.x = newX;
            this.y = newY;
        }
    }
}

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 40;
        this.multiply = 0;
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y],
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
    destroy() {
        const emptyCells = random(this.chooseCell(0));
        const GCells = random(this.chooseCell(1));
        const GECells = random(this.chooseCell(2));
        const MCells = random(this.chooseCell(3));
        const PCells = random(this.chooseCell(12));
        if (emptyCells) {
            let newX = emptyCells[0];
            let newY = emptyCells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (GCells) {
            let newX = GCells[0];
            let newY = GCells[1];
            matrix[newY][newX] = 27;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (GECells) {
            let newX = GECells[0];
            let newY = GECells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
            for (var i in grassEatersArr) {
                if (this.x == grassEatersArr[i].x && this.y == grassEatersArr[i].y) {
                    grassEatersArr.splice(i, 1);
                    break;
                }
            }
        }
        if (MCells) {
            let newX = MCells[0];
            let newY = MCells[1];
            matrix[newY][newX] = 27;
            for (var i in mushroomArr) {
                if (this.x == mushroomArr[i].x && this.y == mushroomArr[i].y) {
                    mushroomArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (PCells) {
            let newX = PCells[0];
            let newY = PCells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (this.energy <= 0) {
            this.dissappear();
        }
    }
    dissappear() {
        for (var i in bulletArr) {
            if (this.x == bulletArr[i].x && this.y == bulletArr[i].y) {
                bulletArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 28
        var newCrater = new Crater(this.x, this.y, 1);
        craterArr.push(newCrater);
    }
}

class Pistol {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y],
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
    strike() {
        var emptyCells = this.chooseCell(0);
        var GCells = this.chooseCell(1);
        var GECells = this.chooseCell(2);
        var MCells = this.chooseCell(3);
        var PCells = this.chooseCell(12);
        var newCell = random(emptyCells);
        var newCellG = random(GCells);
        var newCellGE = random(GECells);
        var newCellM = random(MCells);
        var newCellP = random(PCells);

        if (newCellG /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellGE /*&& this.multiply >= random(5 , 15)*/ ) {
            var newX = newCellGE[0];
            var newY = newCellGE[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellM /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellP /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellP[0];
            var newY = newCellP [1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCell /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        this.multiply++;
    }
}

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