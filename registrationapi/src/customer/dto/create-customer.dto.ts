import {Gender} from "../entities/gender";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCustomerDto {

    @ApiProperty()
    private _firstName:string;
    @ApiProperty()
    private _lastName:string;
    @ApiProperty()
    private _dob:Date;
    @ApiProperty()
    private _gender:Gender;
    @ApiProperty()
    private _email:string
    @ApiProperty()
    private _mobileNo:number;


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get dob(): Date {
        return this._dob;
    }

    set dob(value: Date) {
        this._dob = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get mobileNo(): number {
        return this._mobileNo;
    }

    set mobileNo(value: number) {
        this._mobileNo = value;
    }
}
