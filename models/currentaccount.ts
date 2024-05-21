import {Account} from "./account";

export  class CurrentAccount extends Account{
   private _odLimit:number;

    constructor(runningTotal: number, openingDate: Date, odLimit: number) {
        super(runningTotal, openingDate);
        this._odLimit = odLimit;
    }


    get odLimit(): number {
        return this._odLimit;
    }

    set odLimit(value: number) {
        this._odLimit = value;
    }
}