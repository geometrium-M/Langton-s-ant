
class Game {
    board;
    ant;
    timer;

    constructor() {
        this.board = new Board(10);
        this.init()
    }

    init() {
        document.getElementById('btn').addEventListener('click',  ()=> this.start())
    }

    start() {
       this.board.start()
       this.step()
    }

    step() {
        this.timer = setInterval(() => {
            if (this.board.ant.stuck) {
                return this.stop();
            }
            this.board.move()
        }, 1000)
    }

    stop() {
        clearInterval(this.timer)

    }
}



