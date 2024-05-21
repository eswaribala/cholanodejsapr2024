export abstract class Account{
    private _runningTotal:number;
    private _openingDate: Date;

    constructor(runningTotal: number, openingDate: Date) {
        this._runningTotal = runningTotal;
        this._openingDate = openingDate;
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
}