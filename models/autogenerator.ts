export class AutoGenerator{
    static generateAccountNo(max:number,min:number):number{
        return Math.floor(Math.random()*(max-min)+1);
    }

    static generateYear(max:number,min:number):number{
        return Math.floor(Math.random()*(max-min)+1900);
    }
}