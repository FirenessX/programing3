module.exports = class SecAlBone {
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