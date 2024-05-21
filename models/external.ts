import {Transaction} from "./transaction";
import {Branch} from "./branch";

export class ExternalTransaction extends Transaction{

    static _branch:Branch;


    constructor(amount: number, timeStamp: string, sender: string, receiver: string, branch: Branch) {
        super(amount, timeStamp, sender, receiver);

    }


}