// Boolean
export let isTrue: boolean = false;

// Number
let num: number = 10;
let float: number = 10.5;
let binary: number = 0b101;

Number.MAX_SAFE_INTEGER;

// BigInt
let bigIntVar: bigint = 100n;

// String
let str: string = 'string';

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: { a: string, b: number, c: { d: boolean } } = { a: '', b: 1, c: { d: true }};
objectVar = { a: 'asdsd', b: 45, c: { d: false }}

// Array
let arrayVar: number[][] = [[1], [23], [45, 5, 6,7,89]];
arrayVar = [];

// Tuple
let tuple: [number, string, boolean, {a: bigint}] = [1, '', true, {a: 10n}]

// any
let anyVar: any = {};
anyVar = 123;
anyVar.toUpperCase();

// unknown
let unknownVar: unknown = {a: ''};
// unknownVar.a;

// never

// function

function func(a: number[]): boolean {
    return true;
}

const funcArrow = (a: string): void => { };

const hoFunction = (callback: (b: boolean) => string): void => {}

// Intersection types
let intersectionVar: { a: boolean } & { b: string }
// { a: boolean, b: string }

// Union types
function sum(numbers: (number | string)[]): number | null {
    if (numbers.length) {
        return numbers.reduce<number>((acc, num) => acc + Number(num) || 0, 0)
    }

    return null;
}

// Literal types
let fontWeight: 500 | 600 | 700 | 'bold' = 'bold';
