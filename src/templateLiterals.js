var person = makeWatchedObject({
    firstName: "merkel",
    lastName: "patricia",
    age: 73
});
// handle property changes with checking at compiler time
person.on("firstNameChanged", function (newValue) {
    console.log(newValue);
});
// with type checking
var person2 = makeWatchedObjectWithTypeChecking({
    firstName: "merkel",
    lastName: "patricia",
    age: 73
});
person2.on("ageChanged", function (newage) {
    if (newage < 18) {
        console.log("new age under 18");
    }
    console.log(newage);
});
person2.on("firstNameChanged", function (name) {
    console.log(name.toUpperCase());
});
