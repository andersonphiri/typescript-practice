const user: {age: number, name: string} = {
    age: 29,
    name: "anderson"

}

// using interfaces
interface IUser {
    name : string;
    age: number;
    //non mandatory
    comment ? : string
    getFullDetail() : string;
}

const user2 : IUser = {
    name: "anderson phiri",
    age: 29,
    getFullDetail() : string {
        return "my details";
    },
}