import {Individual} from "../models/Individual";
import {Account} from "../models/account";

export interface AccountDao{

    addAccount:(account:Account)=>Account;
    getAccounts:()=>Account[];
    updateAccount:(runningTotal:number, accountNo:number)=>Account;
    deleteAccount:(accountNo:number)=>boolean;
}