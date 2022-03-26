module.exports = class AlBoneBase {
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
