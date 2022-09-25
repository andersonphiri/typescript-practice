interface Box<TType> {
    contents: TType
}

// by using type aliasing
type Box2<TType> = {
    contents : TType
}

// all sorts of types
type OrNull<Type> = Type | null;
type OneOrMany<TType> = TType | TType[];
type OneOrManyOrNull<TType> = OrNull<OneOrMany<TType>>;

// arays
function printList(list: Array<string>) : void {
    list.forEach((val, ix) => {
        console.log(`value at index: ${ix} is ${val}`);
    })
}

// readonly array
function printList2(list: ReadonlyArray<string>) : void {
    list.forEach((val, ix) => {
        console.log(`value at index: ${ix} is ${val}`);
    })
}

// shorthand
function printList3(list: readonly string[]) : void {
    list.forEach((val, ix) => {
        console.log(`value at index: ${ix} is ${val}`);
    })
}

const roArray : ReadonlyArray<number> = [3.5, .6];
const roStrArray : readonly string[] = ["a", "p", "n"];

// generic function 
function identity<TType, TOut>(arg : TType) : OrNull<TOut> {
    return null;
}

// expression identity function
let myIdentity : <TIn>(input : TIn)  => TIn = identity; 
// or object literal type
let miIdentity : {<TType>(arg : TType) : TType} = identity;

// generic function as an interface
interface GenericIdentityFn<TTYpe> {
    (arg : TTYpe) : TTYpe;
}

interface GenericIdentityFnInOut<TIn, TOut> {
    (arg : TIn) : TOut
}
// specify type
let miIdentity2 : GenericIdentityFn<string>= identity;

// generic classes
class GenericNumber<TNumber> {
    zeroValue: TNumber;
    add: (x : TNumber, y : TNumber) => TNumber;
}

let myGenericNum = new GenericNumber<number>();
myGenericNum.zeroValue = 0;
myGenericNum.add = function ( x: number, y : number)  { return x + y; } 


// generic constraints
interface Lengthwise {
    length: number;
}

class TypeWithLength<TType extends Lengthwise> {
    data: TType;
   /**
    * mySize
    */
   public mySize() : string {
        return `size: ${this.data}`;
   }
}
function logIdentity<TType extends Lengthwise>(arg : TType) : TType {
    console.log(arg.length);
    return arg;
}
logIdentity({source: "LXR", length: 39});

logIdentity([23,45]);

// type constraints on accessing object properties
// here we want to make sure we access a property that exists in an object
function getProperty<TType, Key extends keyof TType>(obj : TType, key : Key) : TType[Key] {
    return obj[key];
}

let x = {a: 1, b: 2, c : 3, d: "andrew"}

let testprop = getProperty(x, "d");
// let testPropError = getProperty(x, "j");

// factories
function create<TType>(c: {new () : TType}) : TType {
    return new c();
}

class BeeKeeper {
    hasMask : boolean = true;
}

class ZooKeeper {
    nameTag: string = "Mikle";
}
class Animal {
    numLegs : number = 4;
}

class Bee extends Animal {
    keeper : BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
    keeper: ZooKeeper = Object.create(ZooKeeper);
}


function createInstance<A extends Animal>(c : new () => A) : A {
    return new c();
}

createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;





