interface Owner {
    name: string;
}

interface Dog {
    weight: number,
    readonly color: string,
    bark: () => void;
}

interface Pet {
    owner: Owner,
    weight: number,
}


interface FrenchBulldog extends Dog, Pet {
    snoringVolume: number;
}

interface Cat extends Pet{

}

function f(a: string, b: string) {

}


export const frenchBuldog: FrenchBulldog = {
    weight: 12,
    color: 'fawn',
    owner: {name: ''},
    snoringVolume: 5,
    bark: () => {}
}

const corgi: Dog = {
    weight: 10,
    color: 'golden',
    bark() {

    }
}

corgi.weight = 12;