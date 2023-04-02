export interface NumberLabel {
    id: number;
}

interface StringLabel {
    name: string;
}

type StringOrNumberLabel<LabelValueType extends string | number> = LabelValueType extends number ? NumberLabel : StringLabel;


function createLabel<LabelType extends string | number>(value: LabelType): StringOrNumberLabel<LabelType> {
    throw "unimplemented";
}


const numberLabel = createLabel<number>(123);
numberLabel.id;
const stringLabel = createLabel<string>('123');
stringLabel.name;
