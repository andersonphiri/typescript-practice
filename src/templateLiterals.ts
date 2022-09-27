type Hello = "Hello";
type World = "World";

type HelloWorld = `${Hello} ${World}`;
type Lang = "en" | "es" | "zh";
type LocalesHelloWorld = `${HelloWorld}_${Lang}`;

// create on events fro all props of an object:

type PropEventSource<TType> = {
    on(eventName: `${string & keyof TType}Changed`, callback: (newValue: any) => void): void;
};

type PropEventSourceWithTypeChecking<TType> = {
    on<Key extends string & keyof TType>(eventName: `${Key}Changed`, callback: (newValue: TType[Key]) => void): void;
};


// create a function to watch for changes on each object property
declare function makeWatchedObject<TType>(obj: TType): TType & PropEventSource<TType>;

declare function makeWatchedObjectWithTypeChecking<TType>(obj: TType): TType & PropEventSourceWithTypeChecking<TType>;
const person = makeWatchedObject({
    firstName: "merkel",
    lastName: "patricia",
    age: 73
})

// handle property changes with checking at compiler time
person.on("firstNameChanged", (newValue) => {
    console.log(newValue)
});

// with type checking
const person2 = makeWatchedObjectWithTypeChecking({
    firstName: "merkel",
    lastName: "patricia",
    age: 73
});

person2.on("ageChanged", (newage) => { // (parameter) newage: number

    if (newage < 18) {
        console.log("new age under 18");
    }
    console.log(newage);
});

person2.on("firstNameChanged", name => {
    console.log(name.toUpperCase());
});


// instrinsic string manipulation 
// converts each char to uppercase
type Greet = "Goed en met jou ?";
type ShoutyGreeting = Uppercase<Greet>; // GOED EN MET JOU ?

type QuietGreeting = Lowercase<ShoutyGreeting>; // goed en met jou ?

// converts the first char to Upper
type Capz = Capitalize<QuietGreeting>; //Goed en met jou ?
type Capz2 = Uncapitalize<Capz>; // goed en met jou ?