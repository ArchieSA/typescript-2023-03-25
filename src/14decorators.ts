import 'reflect-metadata';

export class Calculator {
    @LogTime()
    calcualte() {

    }
}

function LogTime() {
    return (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        descriptor.value = function(...args: Parameters<typeof descriptor.value>){
            console.time(propertyName);
            const result = method.apply(this, args);
            console.timeEnd(propertyName);

            return result;
        }
    }
}

interface Metadata {
    isSingleton: boolean;
}

@Service({isSingleton: true})
class LogService {

}

type Constructor = new (...args: any[]) => {};

function Service(metadata: Metadata) {
    return function (ctor: Constructor) {
        Reflect.defineMetadata('Service', metadata, ctor);
    }
}

function isServiceMetadata(metadata: unknown): metadata is Metadata  {
    const serviceMetadata = metadata as Metadata;

    return typeof serviceMetadata.isSingleton === 'boolean';
}

const instanceMap = new Map();

function getInstance<InstanceType>(ctor: new () => InstanceType): InstanceType {
    let metadata = Reflect.getMetadata('Service', ctor);

    if (!isServiceMetadata(metadata) || !metadata.isSingleton) {
        return new ctor();
    }

    if (!instanceMap.has(ctor)) {
        instanceMap.set(ctor, new ctor());
    }

    return instanceMap.get(ctor);
}


class Bulldog {
    @Range(8, 12)
    height: number = 12;
}

interface RangeMetadata {
    from: number;
    to: number;
}


function Range(from: number, to: number) {
    return function (object: Object, propertyName: string) {
        Reflect.defineMetadata(`Range_${propertyName}`, {from ,to}, object.constructor);
    }
}


function isRangeMetadata(metadata: unknown): metadata is RangeMetadata {
    const rangeMetadata = metadata as RangeMetadata;
    return typeof rangeMetadata.to === 'number' && typeof rangeMetadata.from === 'number';
}


function validate<ValueType extends {}>(value: ValueType) {
    const properties = Object.getOwnPropertyNames(value);

    return properties.every(propertyName => {
        let metadata = Reflect.getMetadata(`Range_${propertyName}`, value.constructor);

        if (!isRangeMetadata(metadata)) {
            return true;
        }

        const { to, from }= metadata;
        const checkedValue = value[propertyName as keyof ValueType];

        return checkedValue >= from && checkedValue <= to;

    });
}



