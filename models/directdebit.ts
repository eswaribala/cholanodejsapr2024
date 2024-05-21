import {Transaction} from "./transaction";

export class DirectDebit extends Transaction{

    private _paymentDate: Date

    constructor(amount: number, timeStamp: string, sender: string, receiver: string, paymentDate: Date) {
        super(amount, timeStamp, sender, receiver);
        this._paymentDate = paymentDate;
    }


    get paymentDate(): Date {
        return this._paymentDate;
    }

    set paymentDate(value: Date) {
        this._paymentDate = value;
    }
}