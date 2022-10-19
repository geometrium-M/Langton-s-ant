class Cell {
    htmlElement;
    alive = false;

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.createView()
    }

    createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('cell');
        document.querySelector('#game').append(this.htmlElement);
    }

    get isAlive() {
        return this.alive;
    }

    setAlive(alive) {
        this.alive = alive;
        this.updateView()
    }

    die() {
        this.alive = false;
        this.updateView()
    }

    alive() {
        this.alive = true;
        this.updateView()
    }

    updateView() {
        if (this.alive) {
            this.htmlElement.style.backgroundColor = 'black';
        } else {
            this.htmlElement.style.backgroundColor = 'white';
        }
    }
}