export class ResponseWrapper<T,U>{
    private _data:T;
    private _message:U;

    constructor(data: T, message: U) {
        this._data = data;
        this._message = message;
    }


    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get message(): U {
        return this._message;
    }

    set message(value: U) {
        this._message = value;
    }
}