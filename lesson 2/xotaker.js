class Xotaker extends KendaniEak {

    sharjvel() {
        this.yntrelVandak();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 10) {
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 5;
        }
    }
    utel() {
        this.yntrelVandak();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}