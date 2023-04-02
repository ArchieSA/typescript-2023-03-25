export enum Sizes {
    s,
    m,
    l,
    xl,
}

let size: Sizes;

size = Sizes.l;
size = 1;

const sizes = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
} as const;