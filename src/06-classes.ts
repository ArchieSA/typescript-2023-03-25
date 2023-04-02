interface Node {
    x: number;
    y: number;

    calculate(): number;
}

type Node2 = {
    z: number
}

export abstract class BaseNode implements Node, Node2 {
    constructor(public x: number, public y: number, public z: number) {}

    calculate(): number {
        return 0;
    }

    abstract paint(): void;

}

class CircleNode extends BaseNode {
    getCoordinates() {
        this.x;
    }

    paint(): void {

    }
}

class CustomNode extends BaseNode {
    paint(): void {

    }
}

const node = new CircleNode(123, 213, 345);
node.x;