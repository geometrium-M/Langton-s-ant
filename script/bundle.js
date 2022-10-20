define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("ant", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ant = void 0;
    var up = 0;
    var right = 1;
    var down = 2;
    var left = 3;
    var Ant = (function () {
        function Ant(x, y, max, direction) {
            if (direction === void 0) { direction = up; }
            this.stuck = false;
            this.x = x;
            this.y = y;
            this.max = max;
            this.direction = direction;
            this.createView();
            this.updatePosition(x, y);
        }
        Ant.prototype.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
            this.updatePosition(x, y);
        };
        Ant.prototype.updatePosition = function (x, y) {
            this.htmlElement.style.top = y * 20 + 'px';
            this.htmlElement.style.left = x * 20 + 'px';
        };
        Ant.prototype.createView = function () {
            this.htmlElement = document.createElement('div');
            this.htmlElement.classList.add('ant');
            var gameHtmlElement = document.querySelector('#game');
            if (gameHtmlElement) {
                gameHtmlElement.append(this.htmlElement);
            }
        };
        Ant.prototype.moveRight = function () {
            this.htmlElement.style.transform += 'rotate(90deg)';
            switch (this.direction) {
                case up:
                    if (this.x + 1 < this.max) {
                        this.setPosition(this.x + 1, this.y);
                        this.setDirection(right);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case right:
                    if (this.y + 1 < this.max) {
                        this.setPosition(this.x, this.y + 1);
                        this.setDirection(down);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case down:
                    if (this.x - 1 >= 0) {
                        this.setPosition(this.x - 1, this.y);
                        this.setDirection(left);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case left:
                    if (this.y - 1 >= 0) {
                        this.setPosition(this.x, this.y - 1);
                        this.setDirection(up);
                    }
                    else {
                        this.stuck = true;
                    }
            }
        };
        Ant.prototype.moveLeft = function () {
            this.htmlElement.style.transform += 'rotate(-90deg)';
            switch (this.direction) {
                case up:
                    if (this.x - 1 >= 0) {
                        this.setPosition(this.x - 1, this.y);
                        this.setDirection(left);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case right:
                    if (this.y - 1 >= 0) {
                        this.setPosition(this.x, this.y - 1);
                        this.setDirection(up);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case down:
                    if (this.x + 1 < this.max) {
                        this.setPosition(this.x + 1, this.y);
                        this.setDirection(right);
                    }
                    else {
                        this.stuck = true;
                    }
                    break;
                case left:
                    if (this.y + 1 < this.max) {
                        this.setPosition(this.x, this.y + 1);
                        this.setDirection(down);
                    }
                    else {
                        this.stuck = true;
                    }
            }
        };
        Ant.prototype.setDirection = function (direction) {
            this.direction = direction;
        };
        Ant.prototype.isStuck = function () {
            return this.stuck;
        };
        Ant.prototype.getX = function () {
            return this.x;
        };
        Ant.prototype.getY = function () {
            return this.y;
        };
        return Ant;
    }());
    exports.Ant = Ant;
});
define("cell", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cell = void 0;
    var Cell = (function () {
        function Cell(x, y) {
            this.alive = false;
            this.x = x;
            this.y = y;
            this.createView();
        }
        Cell.prototype.createView = function () {
            this.htmlElement = document.createElement('div');
            this.htmlElement.classList.add('cell');
            var cellHtmlElement = document.querySelector('#game');
            if (cellHtmlElement) {
                cellHtmlElement.append(this.htmlElement);
            }
        };
        Cell.prototype.isAlive = function () {
            return this.alive;
        };
        Cell.prototype.setAlive = function (alive) {
            this.alive = alive;
            this.updateView();
        };
        Cell.prototype.getX = function () {
            return this.x;
        };
        Cell.prototype.getY = function () {
            return this.y;
        };
        Cell.prototype.updateView = function () {
            if (this.alive) {
                this.htmlElement.style.backgroundColor = 'black';
            }
            else {
                this.htmlElement.style.backgroundColor = 'white';
            }
        };
        return Cell;
    }());
    exports.Cell = Cell;
});
define("board", ["require", "exports", "cell", "ant"], function (require, exports, cell_1, ant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Board = void 0;
    var Board = (function () {
        function Board(size) {
            this.cells = [];
            this.size = size;
            this.createView();
            this.createCells(size);
            this.ant = new ant_1.Ant(4, 4, 10);
        }
        Board.prototype.createCells = function (size) {
            for (var y = 0; y < size; y++) {
                for (var x = 0; x < size; x++) {
                    var cell = new cell_1.Cell(x, y);
                    this.cells.push(cell);
                }
            }
        };
        Board.prototype.createView = function () {
            this.htmlElement = document.createElement('div');
            document.body.prepend(this.htmlElement);
            this.htmlElement.setAttribute('id', 'game');
            this.htmlElement.style.width = this.size * 20 + 'px';
            this.htmlElement.style.height = this.size * 20 + 'px';
        };
        Board.prototype.getCell = function (x, y) {
            return this.cells.find(function (cell) { return (cell.getX() == x && cell.getY() == y); });
        };
        Board.prototype.move = function () {
            var cell = this.getCell(this.ant.getX(), this.ant.getY());
            console.log(cell);
            if (!cell)
                return;
            if (!cell.isAlive()) {
                this.ant.moveRight();
                cell.setAlive(true);
            }
            else {
                cell.setAlive(false);
                this.ant.moveLeft();
            }
        };
        return Board;
    }());
    exports.Board = Board;
});
define("game", ["require", "exports", "board"], function (require, exports, board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Game = (function () {
        function Game() {
            this.timer = 0;
            this.board = new board_1.Board(10);
            this.init();
        }
        Game.prototype.init = function () {
            var _this = this;
            var btn = document.getElementById('btn');
            if (btn) {
                btn.addEventListener('click', function () { return _this.step(); });
            }
        };
        Game.prototype.step = function () {
            var _this = this;
            this.timer = setInterval(function () {
                if (_this.board.ant.isStuck()) {
                    return _this.stop();
                }
                _this.board.move();
            }, 1000);
        };
        Game.prototype.stop = function () {
            clearInterval(this.timer);
        };
        return Game;
    }());
    exports.Game = Game;
});
define("index", ["require", "exports", "game"], function (require, exports, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var game = new game_1.Game();
    })();
});
//# sourceMappingURL=bundle.js.map