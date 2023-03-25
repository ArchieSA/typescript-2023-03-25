
export class Animal {
    feed(): void {

    }
}

export class Horse extends Animal {}

type Constructor = new (...args: any[]) => {};

function Movable<Base extends Constructor>(base: Base) {
    return class BaseMovable extends base{
        move(): void {

        }
    }
}

const MovableHorse = Movable(Horse);

const horse = new MovableHorse();
horse.feed();
horse.move();