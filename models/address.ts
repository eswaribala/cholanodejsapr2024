export class Address{
    private _doorNo:string;
    private _streetName:string;
    private _city:string;
    private _state:string;


    constructor(doorNo: string, streetName: string, city: string, state: string) {
        this._doorNo = doorNo;
        this._streetName = streetName;
        this._city = city;
        this._state = state;
    }


    get doorNo(): string {
        return this._doorNo;
    }

    set doorNo(value: string) {
        this._doorNo = value;
    }

    get streetName(): string {
        return this._streetName;
    }

    set streetName(value: string) {
        this._streetName = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }
}