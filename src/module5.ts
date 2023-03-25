// type
export type Dog = {
    weight: number;
    color: string;
}

export type Pet = {
    owner: string;
}

type FunctionCustom = () => void;

type Sizes = 's' | 'm' | 'l';



type FrenchBulldog = Dog & Pet & {};

type FontWeight = 500 | 600 | 700 | 'bold';

const fontWeight: FontWeight = 500;