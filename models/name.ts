export class Name{
    private _firstName:string;
    private _lastName:string;
    private _middleName:string;


    constructor(firstName: string, lastName: string, middleName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
    }

    set firstName(value:string){
        this._firstName=value;
    }

    get firstName(){
        return this._firstName;
    }


    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get middleName(): string {
        return this._middleName;
    }

    set middleName(value: string) {
        this._middleName = value;
    }
}