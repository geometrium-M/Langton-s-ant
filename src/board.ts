import { iBoard } from './types';
import { Cell } from './cell';
import { Ant } from './ant';

export class Board implements iBoard {
    private cells: Array<Cell> = [];
    private htmlElement: any;
    private size: number;

    public ant: Ant;
   

    constructor(size: number) {
      this.size = size;
      this.createView();
      this.createCells(size);
      this.ant = new Ant(4,4,10);  
    }

    private createCells(size: number) {
       
      for (let y=0; y< size; y++) {
        for (let x=0; x< size; x++) {
          const cell = new Cell(x,y)
          this.cells.push(cell)
        }
      }
    }

    private createView() {
        this.htmlElement = document.createElement('div');
        document.body.prepend(this.htmlElement);
        this.htmlElement.setAttribute('id','game');
        this.htmlElement.style.width = this.size * 20 + 'px';
        this.htmlElement.style.height = this.size * 20 + 'px'; 
    }

    private getCell(x: number, y: number): Cell | undefined {
        return this.cells.find(
            cell => (cell.getX() == x && cell.getY() == y)
        )
    }

    public move() {
      let cell = this.getCell(this.ant.getX(), this.ant.getY()); 
      console.log(cell)
      
      if (!cell) return;

      if ( !cell.isAlive() ) {
        this.ant.moveRight() 
        cell.setAlive(true)
       } else {
        cell.setAlive(false)
        this.ant.moveLeft()    
      }
    }    
}