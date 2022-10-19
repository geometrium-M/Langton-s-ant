class Board {
    cells = [];
    htmlElement;
    ant;
    antPosition;

    constructor(size) {
      this.size = size;
      this.createView();
      this.createCells(size);
    }

    createCells(size) {
       
      for (let y=0; y< size; y++) {
        for (let x=0; x< size; x++) {
          const cell = new Cell(x,y)
          this.cells.push(cell)
        }
      }
    }

    createView() {
        this.htmlElement = document.createElement('div');
        document.body.prepend(this.htmlElement);
        this.htmlElement.setAttribute('id','game');
        this.htmlElement.style.width = this.size * 20 + 'px';
        this.htmlElement.style.height = this.size * 20 + 'px'; 
    }

    getCell(x,y) {
        return this.cells.find(
            cell => (cell.x == x && cell.y == y)
        )
    }

    

    start() {
      this.ant = new Ant(4,4,10);
      // this.calcAntPosition()
      
    }

    // calcAntPosition() {
    //  this.antPosition = this.ant;
    //  console.log(this.antPosition)
     
    // }

    

    move() {
      let cell  = this.getCell(this.ant.x, this.ant.y); 
      console.log(cell)
      
      if(!cell.isAlive) {
        // setTimeout(()=> cell.setAlive(true),100 ) 
        this.ant.moveRight() 
        cell.setAlive(true)
       }else{
        cell.setAlive(false)
        this.ant.moveLeft()    
      }
      // this.calcAntPosition()
    }    
}