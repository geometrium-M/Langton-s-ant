import {iCell} from './types';

export class Cell implements iCell {

    private x: number;
    private y: number;
    private htmlElement: any;
    private alive = false;

    constructor(x: number,y: number) {
        this.x = x;
        this.y = y;
        this.createView()
    }

    private createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('cell');
        const cellHtmlElement = document.querySelector('#game');
        if(cellHtmlElement) {
            cellHtmlElement.append(this.htmlElement);
        }
    }

    public isAlive(): boolean {
        return this.alive;
    }

    public setAlive(alive:boolean) {
        this.alive = alive;
        this.updateView()
    }

    public getX() {
        return this.x;
    }
    public getY() {
        return this.y;
    }

    private updateView() {
        if (this.alive) {
            this.htmlElement.style.backgroundColor = 'black';
        } else {
            this.htmlElement.style.backgroundColor = 'white';
        }
    }
}