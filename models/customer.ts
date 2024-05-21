import {Name} from "./name";
import {Address} from "./address";

export class Customer{
    private _accountNo:number;
    private _name:Name;
    private _address:Address;
    private _contactNo:number;
    private _email:string;
    private _password:string;


    constructor(accountNo: number, name: Name, address: Address, contactNo: number, email: string, password: string) {
        this._accountNo = accountNo;
        this._name = name;
        this._address = address;
        this._contactNo = contactNo;
        this._email = email;
        this._password = password;
    }


    get accountNo(): number {
        return this._accountNo;
    }

    set accountNo(value: number) {
        this._accountNo = value;
    }

    get name(): Name {
        return this._name;
    }

    set name(value: Name) {
        this._name = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get contactNo(): number {
        return this._contactNo;
    }

    set contactNo(value: number) {
        this._contactNo = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}