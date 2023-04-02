interface Node {
    x: number;
    y: number;
}

export type NodeCopy = {
    [Property in keyof Node]: Node[Property]
}

type PartialNode = {
    [Property in keyof Node]?: Node[Property]
}

type RequiredNode = {
    [Property in keyof Node]-?: Node[Property]
}

type RadonlyNode = {
    readonly [Property in keyof Node]: Node[Property]
}

type NoRadonlyNode = {
    -readonly [Property in keyof Node]: Node[Property]
}

type Record<T extends string | number, K> = {
    [P in T]: K
}

const rusDictionary: Record<number, string> = {
    1: 'кнопка'
}

const engTitleDictionary: Record<number, string> = {
    2: 'button'
}

type Partial<T extends {}> = {
    [Property in keyof T]?: T[Property]
}

type Required<T extends {}> = {
    [Property in keyof T]-?: T[Property]
}

type Readonly<T extends {}> = {
    readonly [Property in keyof T]: T[Property]
}

type NoReadonly<T extends {}> = {
    -readonly [Property in keyof T]: T[Property]
}

type Getters<T extends {}> = {
    [Property in keyof T as `get${Capitalize<Property & string>}`]: () => T[Property]
}

type Setters<T extends {}> = {
    [Property in keyof T as `set${Capitalize<Property & string>}`]: (value: T[Property]) => void
}

class CircleNode implements Node, Getters<Omit<Node, 'x' | 'y'>>, Setters<Node>{
    getX(): Node["x"] {
        return this.y;
    }

    getY(): Node["y"] {
        return this.x;
    }

    setX<Property>(value: Node["x"]): void {
    }

    setY<Property>(value: Node["y"]): void {
    }

    x: number = 123;
    y: number = 456;

}

