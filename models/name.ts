class Name{
    private _firstName:string;
    private _lastName:string;
    private _middleName:string;


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