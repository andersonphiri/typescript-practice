class CustomError extends Error {
    constructor(m: string) {
        super(m);
        // set prototype explicitly
        // Object.setPrototypeOf(this, CustomError.prototype);
    }
}

class Greeter {
    public greet() {
        console.log(`hello ${this.getName()}`)
    }
    protected getName() {
        return "hello Name";
    }

    private readonly x: number = 350;
    // private readonly keysVal: HashM<string, string>();
}

class MyClass {
    name: "My Class";
    getName = () => { // use arrow function to avoid misbehaviour of this keyword
        return this.name;
    }
    // the above getName implementation has performance impact
    // to fix that, use this keyWord
    getName2(this: MyClass) {
        return this.name;
    }
}

const c = new MyClass();
c.getName2(); // works ok
c.getName(); // works ok too
// const cg = c.getName2(); // will crash the app

// this types
class Box3 {
    contents: string = "box3";
    set(value: string) {
        // (method) Box3.set(value: string) : this;
        this.contents = value;
        return this;
    }
}

class ClearBox extends Box3 {
    clear() {
        this.contents = "";
    }
}
const abox3 = new ClearBox();
const bbox3 = abox3.set("some contents");

// using this in a parameter type annotation

class Box4 {
    content: string = "no contents";
    sameAs(other: this) {
        return other.content === this.content;
    }
}

class DerivedBox4 extends Box4 {

}

const box4 = new Box4();
const dbox4 = new DerivedBox4();
const dbox4_ = new DerivedBox4();

// dbox4.sameAs(box4); // wont work

dbox4.sameAs(dbox4_); // works

// this based guards
class FileSystemObject {
    constructor(public path: string, private networked: boolean) { }
    isFile(): this is FileRep {
        return this instanceof FileRep;
    }
    isDirectory(): this is Directory {
        return this instanceof Directory;
    }
    isNetworked(): this is Networked & this {
        return this.networked;
    }

}

class FileRep extends FileSystemObject {
    constructor(path: string, public content: string) {
        super(path, false);
    }
}

class Directory extends FileSystemObject {
    children: FileSystemObject[];
}
interface Networked {
    host: string;
}

// test
const fsobj: FileSystemObject = new FileRep("./test.json", "data");
if (fsobj.isFile()) {
    console.log(fsobj.content);
} else if (fsobj.isDirectory()) {
    console.log(fsobj.children);
} else if (fsobj.isNetworked()) {
    fsobj.host;
}

// for lazy validation if the property is set
class Box5<TType> {
    value?: TType;
    hasValue(): this is { value: TType } {
        return this.value !== undefined;
    }
}

const b5 = new Box5();
b5.value = "grill";
b5.value; // (property) Box<unknown>.value ? : unknown

if (b5.hasValue()) {
    b5.value; // (property) vlue : unknown
}


// abstract classes: cannot be newed, subclasses must implement abstract methods

abstract class Human {
    abstract getName(): string;
}

class Child extends Human {
    private name = "children";
    getName() {
        return this.name;
    }

}
// create ctor instance: not with abstract classes wont work
function gret(ctor: typeof Box3) {
    const instance = new ctor();
    instance.contents = "halala";
}

// but to use a base class so as to instantiate all sub classes OF an Abstract class
function constructFromAbstractBase(ctor: new () => Human) : Human {
    const instance = new ctor();

    return instance;
}

const child = constructFromAbstractBase(Child);