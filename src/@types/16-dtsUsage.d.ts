// types for lib without types
declare module 'ramda' {
    export function mergeRight(a: string, b: string): string;
    export const test: string;
    /* 
    ** Это просто иллюстрация, можно описать все, что экспортируетс из либы
    ** Главное чтобы совпадали названия и тогда при экспорте из либы типы автоматом подтянутся
    ** Такой файл можно расположить, например, в src/@types
    */
}

// описываем типами Window, иногда какие-то библиотеки добавляют что-то туда, нужно это типизировать
declare global {
    interface Window {
        getDifferentParamsFromWindowObject(): string;
    }
}

// Global Variables
declare var ENV: number // так можно описать глобальные переменные

export {} // Это нужно если вы ничего не импортируете, тк файл должен быть модулем