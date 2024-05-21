import {Customer} from "./customer";

export abstract class Account{

    private _runningTotal:number;
    private _openingDate: Date;
    private _customer:Customer;

    constructor(runningTotal: number, openingDate: Date,customer:Customer) {
        this._runningTotal = runningTotal;
        this._openingDate = openingDate;
        this._customer=customer;
    }

    get runningTotal(): number {
        return this._runningTotal;
    }

    set runningTotal(value: number) {
        this._runningTotal = value;
    }

    get openingDate(): Date {
        return this._openingDate;
    }

    set openingDate(value: Date) {
        this._openingDate = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }
}