class Smoke extends Thing{
    update() {
        //smoke moves one pixel to the right
        this.x += 1;
        
        //when the clouds go past the edge, they loop
        if (this.x > width) {
            this.x = -this.img.width;
        }
    }
}