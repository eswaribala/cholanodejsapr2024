"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(doorNo, streetName, city, state) {
        this._doorNo = doorNo;
        this._streetName = streetName;
        this._city = city;
        this._state = state;
    }
    Object.defineProperty(Address.prototype, "doorNo", {
        get: function () {
            return this._doorNo;
        },
        set: function (value) {
            this._doorNo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "streetName", {
        get: function () {
            return this._streetName;
        },
        set: function (value) {
            this._streetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
