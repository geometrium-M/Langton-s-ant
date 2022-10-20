
import { Board } from './board';

export class Game {
    private board: Board;
    private  timer: number = 0;
    
    constructor() {
        this.board = new Board(10);
        this.init()
    }

    private init() {
        const btn =  document.getElementById('btn');
        if(btn) {
            btn.addEventListener('click',  ()=> this.step())
        }
    }

    private step() {
        this.timer = setInterval(() => {
            if (this.board.ant.isStuck()) {
                return this.stop();
            }
            this.board.move()
        }, 1000)
    }

    private stop() {
        clearInterval(this.timer);
    }
}



