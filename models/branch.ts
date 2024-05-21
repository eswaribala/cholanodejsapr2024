import {Address} from "./address";

export class Branch{
    private _branchCode:string;
    private _branchName:string;
    private _branchAddress:Address;
    private _postalCode:number;


    constructor(branchCode: string, branchName: string, branchAddress: Address, postalCode: number) {
        this._branchCode = branchCode;
        this._branchName = branchName;
        this._branchAddress = branchAddress;
        this._postalCode = postalCode;
    }

    get branchCode(): string {
        return this._branchCode;
    }

    set branchCode(value: string) {
        this._branchCode = value;
    }

    get branchName(): string {
        return this._branchName;
    }

    set branchName(value: string) {
        this._branchName = value;
    }

    get branchAddress(): Address {
        return this._branchAddress;
    }

    set branchAddress(value: Address) {
        this._branchAddress = value;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    set postalCode(value: number) {
        this._postalCode = value;
    }
}