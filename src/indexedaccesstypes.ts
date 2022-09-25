type Person = {age: number, name: string, alive: boolean}
type Age = Person["age"];
type I2 = Person[keyof Person]; // I2 = number | string | boolean
type AliveOrName = "alive" | "name" | null;
type I3 = Person[AliveOrName];

// capturing types of arrays
const myArr = [
    {name: "andy", age: 29},
    {name: "john", age: 32, province: "mazowe"}
];

type Student = typeof myArr[number];
type StudentNumber =  typeof myArr[number]["province"];

const _key = "age";
// type Age2 = Person[_key]; // will not work
type __key = "age";
type Age2 = Person[__key]; // works