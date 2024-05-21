import {Customer} from "./customer";
import {Gender} from "./gender";
import {Name} from "./name";
import {Address} from "./address";

export class Individual extends Customer{
    private _gender:Gender;
    private _dob: Date;

    constructor(accountNo: number, name: Name, address: Address,
                contactNo: number, email: string, password: string,
                gender: Gender, dob: Date) {
        super(accountNo, name, address, contactNo, email, password);
        this._gender = gender;
        this._dob = dob;
    }


    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }

    deposit(): number {
        return 0;
    }

    withdraw(amount: number): number {
        return 0;
    }
}