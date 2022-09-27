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
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(m) {
        return _super.call(this, m) || this;
        // set prototype explicitly
        // Object.setPrototypeOf(this, CustomError.prototype);
    }
    return CustomError;
}(Error));
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.x = 350;
        // private readonly keysVal: HashM<string, string>();
    }
    Greeter.prototype.greet = function () {
        console.log("hello ".concat(this.getName()));
    };
    Greeter.prototype.getName = function () {
        return "hello Name";
    };
    return Greeter;
}());
var MyClass = /** @class */ (function () {
    function MyClass() {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
    }
    // the above getName implementation has performance impact
    // to fix that, use this keyWord
    MyClass.prototype.getName2 = function () {
        return this.name;
    };
    return MyClass;
}());
var c = new MyClass();
c.getName2(); // works ok
c.getName(); // works ok too
// const cg = c.getName2(); // will crash the app
// this types
var Box3 = /** @class */ (function () {
    function Box3() {
        this.contents = "box3";
    }
    Box3.prototype.set = function (value) {
        // (method) Box3.set(value: string) : this;
        this.contents = value;
        return this;
    };
    return Box3;
}());
var ClearBox = /** @class */ (function (_super) {
    __extends(ClearBox, _super);
    function ClearBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearBox.prototype.clear = function () {
        this.contents = "";
    };
    return ClearBox;
}(Box3));
var abox3 = new ClearBox();
var bbox3 = abox3.set("some contents");
// using this in a parameter type annotation
var Box4 = /** @class */ (function () {
    function Box4() {
        this.content = "no contents";
    }
    Box4.prototype.sameAs = function (other) {
        return other.content === this.content;
    };
    return Box4;
}());
var DerivedBox4 = /** @class */ (function (_super) {
    __extends(DerivedBox4, _super);
    function DerivedBox4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedBox4;
}(Box4));
var box4 = new Box4();
var dbox4 = new DerivedBox4();
var dbox4_ = new DerivedBox4();
// dbox4.sameAs(box4); // wont work
dbox4.sameAs(dbox4_); // works
// this based guards
var FileSystemObject = /** @class */ (function () {
    function FileSystemObject(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    FileSystemObject.prototype.isFile = function () {
        return this instanceof FileRep;
    };
    FileSystemObject.prototype.isDirectory = function () {
        return this instanceof Directory;
    };
    FileSystemObject.prototype.isNetworked = function () {
        return this.networked;
    };
    return FileSystemObject;
}());
var FileRep = /** @class */ (function (_super) {
    __extends(FileRep, _super);
    function FileRep(path, content) {
        var _this = _super.call(this, path, false) || this;
        _this.content = content;
        return _this;
    }
    return FileRep;
}(FileSystemObject));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Directory;
}(FileSystemObject));
// test
