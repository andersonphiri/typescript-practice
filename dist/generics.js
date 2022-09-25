var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// arays
function printList(list) {
    list.forEach(function (val, ix) {
        console.log("value at index: ".concat(ix, " is ").concat(val));
    });
}
// readonly array
function printList2(list) {
    list.forEach(function (val, ix) {
        console.log("value at index: ".concat(ix, " is ").concat(val));
    });
}
// shorthand
function printList3(list) {
    list.forEach(function (val, ix) {
        console.log("value at index: ".concat(ix, " is ").concat(val));
    });
}
var roArray = [3.5, .6];
var roStrArray = ["a", "p", "n"];
// generic function 
function identity(arg) {
    return null;
}
// expression identity function
var myIdentity = identity;
// or object literal type
var miIdentity = identity;
// specify type
var miIdentity2 = identity;
// generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNum = new GenericNumber();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) { return x + y; };
var TypeWithLength = /** @class */ (function () {
    function TypeWithLength() {
    }
    /**
     * mySize
     */
    TypeWithLength.prototype.mySize = function () {
        return "size: ".concat(this.data);
    };
    return TypeWithLength;
}());
function logIdentity(arg) {
    console.log(arg.length);
    return arg;
}
logIdentity({ source: "LXR", length: 39 });
logIdentity([23, 45]);
// type constraints on accessing object properties
// here we want to make sure we access a property that exists in an object
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: "andrew" };
var testprop = getProperty(x, "d");
// let testPropError = getProperty(x, "j");
// factories
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nameTag = "Mikle";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = 4;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = Object.create(ZooKeeper);
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
