import {Transaction} from "./transaction";
import {Branch} from "./branch";

export class ExternalTransaction extends Transaction{

    private _branch:Branch;


    constructor(amount: number, timeStamp: string, sender: string, receiver: string, branch: Branch) {
        super(amount, timeStamp, sender, receiver);
        this._branch = branch;
    }


    get branch(): Branch {
        return this._branch;
    }

    set branch(value: Branch) {
        this._branch = value;
    }
}