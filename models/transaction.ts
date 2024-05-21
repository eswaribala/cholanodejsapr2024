export abstract class Transaction{
   protected _amount:number;
   protected _timeStamp:string;
   protected _sender:string;
   private _receiver:string;


    constructor(amount: number, timeStamp: string, sender: string, receiver: string) {
        this._amount = amount;
        this._timeStamp = timeStamp;
        this._sender = sender;
        this._receiver = receiver;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get timeStamp(): string {
        return this._timeStamp;
    }

    set timeStamp(value: string) {
        this._timeStamp = value;
    }

    get sender(): string {
        return this._sender;
    }

    set sender(value: string) {
        this._sender = value;
    }


    get receiver(): string {
        return this._receiver;
    }

    set receiver(value: string) {
        this._receiver = value;
    }
}