// generics
// export function getSum<T>(a: T, b: T): T {
    // return a + b;
// }

// getSum<string>('1', '2')

interface DefaultOwner {
    name: string;
}

export interface Pet<Owner = DefaultOwner> {
    address: string;
    owner: Owner
}

let pet: Pet<string>;

type Cat<T> = T & {}

class Node<T> {
    constructor(public x: T) {
    }
}

const node = new Node<string>('12')

function getProperty<Obj extends {}, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
    return obj[key];
}


getProperty({a: '', b: 123}, 'b')
