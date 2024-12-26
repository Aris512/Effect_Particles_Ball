class Bola {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radio = 10
        this.direX = (Math.random() * 2) - 1
        this.direY = (Math.random() * 2) - 1
        this.speed = 5

    }

    dibujar() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath
    }
    mover() {
        this.x += this.direX * this.speed
        this.y += this.direY * this.speed

        if(this.x+this.radio>canvas.width|| this.x<0){
            this.direX *= -1
        }
        if(this.y+this.radio>canvas.height|| this.y<0){
            this.direY *= -1
        }
    }
}