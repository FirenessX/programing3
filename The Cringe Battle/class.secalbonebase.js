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