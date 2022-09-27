function createLabel(id) {
    var result = { id: 23 };
    return result;
}
function createLabel1(name) {
    var result = { name: "anderson" };
    return result;
}
function createLabel2(nameOrId) {
    throw new Error("unimplemented");
}
function createLabelUni(idOrName) {
    throw "unimplemented";
}
var b__0 = createLabelUni("anderson");
var b__1 = createLabelUni(45.678);
function lol() {
    return "laugh";
}
var b = [20];
