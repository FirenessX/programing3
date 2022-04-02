var LivingCreature = require("./class.LIVING_CREATURE");

module.exports = class Grass extends LivingCreature {
    mul() {   
        this.multiply++;     
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
        if(newCell && this.multiply >= 1){
            
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
    
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}