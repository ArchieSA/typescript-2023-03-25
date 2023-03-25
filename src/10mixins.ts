export class Animal {
    feed(): void {

    }
}

class Movable {
    move(): void {

    }
}

export class Horse {}
export interface Horse extends Animal, Movable {}

type Constructor = new (...args: any[]) => {};


function applyMixins(baseClass: Constructor, parentClasses: Constructor[]) {
    parentClasses.forEach(parent => {
        Object.getOwnPropertyNames(parent).forEach(name => {
            baseClass.prototype[name] = parent.prototype[name];
        })
    })
}

applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();

horse.feed();
horse.move();
