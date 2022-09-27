// syntax is:
// SomeType extends OtherType ? TrueType : FalseType
interface AnimalInterface {
    live() : void;
}

interface Dog extends Animal {
    woof() : void;
}

type StringIfAnimalElseNumber = Dog extends AnimalInterface ? OrNull<string> : OrNull<number>;
type NumberIfAnimalElseString = RegExp extends AnimalInterface ? OrNull<number> : OrNull<string> ;


// however, the power of conditionals come from using them with generics
interface IdLabel {
    id : number;
}

interface NameLabel {
    name: string;
}

function createLabel(id: number) : IdLabel {
    let result : IdLabel = {id: 23}
    return result;
} 
function createLabel1(name: string): NameLabel {
    let result: NameLabel = { name: "anderson"}
    return result;
}
function createLabel2(nameOrId: string |  number) : IdLabel | NameLabel  {
    throw new Error("unimplemented");
}

// solving the above using generics using one design
type NameOrId<TType extends number | string> = TType extends number ? IdLabel : NameLabel;

function createLabelUni<TType extends number | string>(idOrName : TType) : NameOrId<TType> {
    throw "unimplemented";
}
let b__0
 = createLabelUni("anderson");
let b__1 = createLabelUni(45.678);

// type constraint with unknown property on Generic TType
// type MessageOf<TType> = TType["message"]; // will not work
type MessageOf<TType extends {message: unknown}> = TType["message"]; 
// or
type MessageOf2<TType> = TType extends {message: unknown} ? TType["message"] : never;


// putting it to test
interface Email {
    message: string;
}
interface Dog {
    bark() : void;
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf2<Dog>; 

// flatterns: extract the type from array if TType is array else just return that type
type Flatten<TType> = TType extends any[] 
? TType[number] // using indexed access type
: TType;

type StringsFlattened = Flatten<string[]>;
type FlattenedString = Flatten<string> ;

// or, use the infer keyword
type Flattened<TType> = TType extends Array<infer Item> ? Item : TType;

type NumbersFlattened = Flattened<number[]>; // number

// cont'd infer type returned by func
// 
type GetReturnType<TType> = TType extends (...args: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>; // number
type StringRT = GetReturnType<(x: string) => string>;
function lol() {
    return "laugh";
}
type StringRT2 = GetReturnType<() => string>;


type Bools = GetReturnType<(a: number, b: number) => boolean[]>;

// for overloaded function, the resolved type will be the last signature, which is presumably the most (catch-all case)
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): number | string;

// then to get the typeof return, we say
type StrOrNum = ReturnType<typeof stringOrNum>;

// distributive conditional types
// consider to array type
type ToArray<TType> = TType extends any ? TType[] : never;
// applying toarry type to a union, it will be distributed to each member of the union
type StrOrNumToArray = ToArray<string | number>; // becomes string[] | number[]

// the behaviour of distributive is ok but what if you want only one toArray type of a union ?
// then use [] around ToArray
type ToArrayNonDistributed<TType> = [TType] extends [any] ? TType[] : never;

type StrOrNumToArrayNonDistributed = ToArrayNonDistributed<string | number> // will become (string  number)[]

let b: StrOrNumToArrayNonDistributed = [20];