// maps all property of an object into a key:value pair

interface Horse {

}

type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
}

const conforms: OnlyBoolsAndHorses = {
    pass: true,
    failed: false
};

// map all properties to bools
type OptionFlags<TType> = {
    [Property in keyof TType] : boolean
}

type OptionFlags2<TType> = {
    [Property in keyof TType]: boolean | Horse;
}

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionFlags<FeatureFlags>; //  becomes { darkMode: boolean, newUserProfile: boolean }


// modifier during mapping: +readonly, -readonly , ? -? (+) is default

// from immutable to mutable mapping
type ToMutable<TType> = {
    -readonly [Property in keyof TType]: TType[Property];
}

// likewise to make everything immutable

type ToImmutable<TType> = {
   +readonly [Property in keyof TType]  : TType[Property]
}

type LockedAccount = {
    readonly id: string;
    readonly name: string;
}

type UnLockedAccount = ToMutable<LockedAccount>; // {id: string, name: string}
// make it immuttable
type ReLockedAccount = ToImmutable<UnLockedAccount>; // { readonly id: string, readonly name: string}

// removes optional modifier to concrete

type ToConcrete<TType> = {
    [Property in keyof TType]-?: TType[Property];
}

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
}

type ConcreteUser = ToConcrete<MaybeUser>;

// remapping via as:

// type MappedTypeWithNewProperties<TType> = {
//     [Properties in keyof TType as NewKeyType]: TType[Properties];
// }

type Getter<TType> = {
    [Property in keyof TType as `get${Capitalize<string & Property>}`]: () => TType[Property];
}

type PersonEager = {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getter<PersonEager>; // { getName : () => string, getAge : () => number, getLocation: () => string;  }

// filter a property
type RemoveKindField<TType> = {
    [Property in keyof TType as Exclude<Property, "kind">] : TType[Property]
}

interface CircleWithKindProp {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<CircleWithKindProp>; // {radius: number}

// map over unions

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;// { square: (event: SquareEvent) => void, circle: (event: CircleEvent) => void }

// mapping types using conditionals
type ExtractPII<TType> = {
    [Property in keyof TType]: TType[Property] extends { pii: true } ? true : false;
}

// 
type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
}

type ObjectNeedsGDPRDeletion = ExtractPII<DBFields>; // {id: false; name: true}

