declare var __ENV__: 'production' | 'dev' | 'prestable'

declare function hello(): void;

declare module "json!*" {
    const value: string;
}