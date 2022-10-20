import { Ant } from "./ant";

export interface iCell {
    isAlive: Function,
    setAlive: Function,
    getX: Function,
    getY: Function
}

export interface iAnt {
    moveRight: Function,
    moveLeft: Function,
    getX: Function,
    getY: Function,
    isStuck: Function
}

export interface iBoard {
    move: Function,
    ant: Ant
}

  