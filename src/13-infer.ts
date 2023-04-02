export let variables = 'string';


function getProperty<Obj extends {}, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
    return obj[key];
}


getProperty({a: '', b: 123}, 'a')


function call<ReturnType, ArgumentsType extends any[]>(callback: (...args: ArgumentsType) => ReturnType, ...args: ArgumentsType): ReturnType {
    return callback(...args);
}


call(getProperty, {a: ''}, 'a');


type ReturnType<Function extends (...args: any[]) => any> = Function extends (...args: any[]) => infer ReturnType ? ReturnType : never;

type GetPropertyReturnType = ReturnType<typeof getProperty<{a: string}, 'a'>>;

const test: GetPropertyReturnType = 'asddas';
