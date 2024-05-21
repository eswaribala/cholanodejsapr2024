"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
var Name = /** @class */ (function () {
    function Name(firstName, lastName, middleName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
    }
    Object.defineProperty(Name.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Name.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Name.prototype, "middleName", {
        get: function () {
            return this._middleName;
        },
        set: function (value) {
            this._middleName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
