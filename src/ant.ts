import { iAnt } from "./types";

    const up = 0;
    const right = 1;
    const down = 2;
    const left = 3;

   
 export class Ant implements iAnt {
    private x: number;
    private y: number;
    private htmlElement: any;
    private direction: number;
    private max: number;    
    private stuck = false;
   

    constructor(x: number,y: number,max: number, direction = up) {
        this.x = x;
        this.y = y;
        this.max = max;
        this.direction = direction;
        this.createView()
        this.updatePosition(x, y)
    }
    private setPosition(x: number,y: number) {
        this.x = x;
        this.y = y;
        this.updatePosition(x,y) 
    }
    private updatePosition(x: number, y:number) {
        this.htmlElement.style.top = y * 20 + 'px';
        this.htmlElement.style.left = x * 20 + 'px';
    }
    private createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('ant');
        const gameHtmlElement = document.querySelector('#game');
        if (gameHtmlElement) { 
            gameHtmlElement.append(this.htmlElement);
        }
    }

    public moveRight(){
        this.htmlElement.style.transform  +=  'rotate(90deg)';
       
        switch(this.direction) {
            case up: 
                
                if (this.x + 1 < this.max) {
                     this.setPosition(this.x + 1, this.y)
                     this.setDirection(right);
                } else {
                    this.stuck = true;
                }
                
                break;

            case right:
                
               
                if (this.y + 1 < this.max) {
                    this.setPosition(this.x, this.y + 1)
                    this.setDirection(down)
                } else {
                    this.stuck = true;
                }
                
                break;

            case down:
                
                
                if (this.x - 1 >= 0) {
                    this.setPosition(this.x - 1, this.y)
                    this.setDirection(left)
                } else {
                    this.stuck = true;
                }
                
                break;

            case left:
                
                
                if (this.y - 1 >= 0) {
                    this.setPosition(this.x, this.y - 1)
                    this.setDirection(up);
                } else {
                    this.stuck = true;
                }
                
        }
    }
   
    public moveLeft() {
        this.htmlElement.style.transform  +=  'rotate(-90deg)';
        switch(this.direction) {
            case up: 
                
                if (this.x - 1 >= 0) {
                    this.setPosition(this.x - 1, this.y)
                    this.setDirection(left);
                    
                } else {
                    this.stuck = true;
                }
                break;

            case right:
               
                if(this.y - 1 >= 0) {
                    this.setPosition(this.x, this.y - 1) 
                    this.setDirection(up)
                   
                } else {
                    this.stuck = true;
                    
                }
                break;

            case down:
                
                if (this.x + 1 < this.max) {
                    this.setPosition(this.x + 1, this.y)
                    this.setDirection(right)
                   
                } else {
                    this.stuck = true;
                }
               
                break;

            case left:
                
                if(this.y + 1 < this.max) {
                    this.setPosition(this.x, this.y + 1)
                    this.setDirection(down)
               
                } else {
                    this.stuck = true;
                } 
        }
        
        
    }

    private setDirection(direction: number) {
        this.direction = direction;
    }  
    
    public isStuck() {
        return this.stuck;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }
}