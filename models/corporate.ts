import {Customer} from "./customer";
import {CompanyType} from "./companytype";
import {Name} from "./name";
import {Address} from "./address";

export class Corporate extends Customer{
   private _companyType:CompanyType;


    constructor(accountNo: number, name: Name, address: Address, contactNo: number, email: string, password: string, companyType: CompanyType) {
        super(accountNo, name, address, contactNo, email, password);
        this._companyType = companyType;
    }


    get companyType(): CompanyType {
        return this._companyType;
    }

    set companyType(value: CompanyType) {
        this._companyType = value;
    }

    deposit(): number {
        return 0;
    }

    withdraw(amount: number): number {
        return 0;
    }
}