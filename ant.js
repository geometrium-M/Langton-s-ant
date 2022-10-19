// import Game from 'game.js'
    const up = 0;
    const right = 1;
    const down = 2;
    const left = 3;


class Ant {
    htmlElement;
    direction;
    stuck = false;

    constructor(x,y,max, direction = up) {
        this.x = x;
        this.y = y;
        this.max = max;
        this.direction = direction;
        this.createView()
        this.updatePosition(x, y)
    }
    setPosition(x,y) {
        this.x = x;
        this.y = y;
        this.updatePosition(x,y) 
    }
    updatePosition(x,y) {
        this.htmlElement.style.top = y * 20 + 'px';
        this.htmlElement.style.left = x * 20 + 'px';
    }
    createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('ant');
        document.querySelector('#game').append(this.htmlElement);
    }

    moveRight(){
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
   
    moveLeft() {
        this.htmlElement.style.transform  +=  'rotate(-90deg)';
        
        

        switch(this.direction) {
            case up: 
                
                if (this.x - 1 >= 0) {
                    this.setPosition(this.x - 1, this.y)
                    this.setDirection(left);
                    
                } else {
                   
                
                    game.clearInterval()
                }
                break;

            case right:
               
                if(this.y - 1 >= 0) {
                    this.setPosition(this.x, this.y - 1) 
                    this.setDirection(up)
                   
                } else {
                    game.clearInterval()
                    
                }
                break;

            case down:
                
                if (this.x + 1 < this.max) {
                    this.setPosition(this.x + 1, this.y)
                    this.setDirection(right)
                   
                } else {
                    game.clearInterval()
                }
               
                break;

            case left:
                
                if(this.y + 1 < this.max) {
                    this.setPosition(this.x, this.y + 1)
                    this.setDirection(down)
               
                } else {
                    game.clearInterval()
                } 
        }
        
        
    }

    setDirection(direction) {
        this.direction = direction;
    }    
}