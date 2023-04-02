// 1 typeof

export function addPadding(padding: number | string, text: string): string {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + text;
    }

    return padding + text;
}

// 2 Проверка истинности

function sum(a: number, b?: number): number {
    if (b) {
        return a + b;
    }

    return a;
}

// 3 Проверка на равенство
function calculate(x: string | number, y: string | boolean) {
    if (x === y) {
        return x + y;
    }
}

// 4 in

interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function makeSomeNoise(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();
    }
}


// 5 instanceof
function log(value: Date | string) {
    if (value instanceof Date) {
        console.log(value.toUTCString())
    }
}


// 6 type predicate

function isDog(animal: unknown): animal is Dog {
    const dog = animal as Dog;

    return dog.bark !== undefined && typeof dog.bark === 'function';
}


function makeSomeNoise2(animal: Dog | Cat) {
    if (isDog(animal)) {
        animal.bark();
    }
}

// 7

interface Bulldog {
    type: 'bulldog'
}

interface Corgi {
    type: 'corgi'
}

function run(dog: Bulldog | Corgi) {
    if (dog.type === 'bulldog') {
        dog;
    }
}

interface Film {
    type: 'film',
    duration: number;
}

interface Series {
    type: 'series',
    seriesCount: number,
    seriesDuration: number;
}

interface MiniSeries {
    type: 'miniSeries',
    duration: number;
}

function getDuration(movie: Film | Series | MiniSeries): number {
    if (movie.type === 'film' || movie.type === 'miniSeries') {
        return movie.duration;
    }

    return movie.seriesCount * movie.seriesDuration;
}