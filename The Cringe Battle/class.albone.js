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