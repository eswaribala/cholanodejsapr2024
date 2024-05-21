import {Account} from "./account";

export class SavingsAccount extends Account{
  private _interestRate:number;

    constructor(runningTotal: number, openingDate: Date, interestRate: number) {
        super(runningTotal, openingDate);
        this._interestRate = interestRate;
    }


    get interestRate(): number {
        return this._interestRate;
    }

    set interestRate(value: number) {
        this._interestRate = value;
    }
}