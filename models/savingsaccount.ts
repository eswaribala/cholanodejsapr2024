import {Account} from "./account";
import {Customer} from "./customer";

export class SavingsAccount extends Account{
  private _interestRate:number;


    constructor(runningTotal: number, openingDate: Date, customer: Customer, interestRate: number) {
        super(runningTotal, openingDate, customer);
        this._interestRate = interestRate;
    }

    get interestRate(): number {
        return this._interestRate;
    }

    set interestRate(value: number) {
        this._interestRate = value;
    }
}