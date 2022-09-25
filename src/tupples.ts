type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];
    const [destructedString, destructedNumber] = pair;
    console.log(a, b, destructedNumber, destructedString);
}

interface StringNumberPairInterface {
    length: 2;
    0: string;
    1: number;
    slice(start ? : number, end ? : number) : Array<string | number>;
}

function strNum(p : StringNumberPairInterface) {
    const a = p[0];
}

type Either2dOr3D = [number, number, number ?];
type StringNumberBooleans = [string, number, ...boolean[]]