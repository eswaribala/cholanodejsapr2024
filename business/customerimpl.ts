import {IndividualDao} from "../facades/individualdao";
import {AccountDao} from "../facades/accountDao";
import {ExtendedIndividualDao} from "../facades/extendedIndividualdao";
import {Account} from "../models/account";
import {Individual} from "../models/Individual";
//multiple inheritance
export  class IndividualImpl implements ExtendedIndividualDao,AccountDao{

    private _individuals:Individual[];
    private _accounts:Account[];
    // @ts-ignore
    private _individualMap:Map<Individual,Account>;


    constructor() {
        this._individuals=new Array();
        this._accounts=new Array();
        // @ts-ignore
        this._individualMap=new Map<Individual,Account>();

    }

    addAccount(account: Account): Account {
        this._accounts.push(account)
        this._individualMap.set(account.customer,account);
        return account;
    }

    addIndividual(individual: Individual): Individual {
        this._individuals.push(individual)

        return individual;
    }

    deleteAccount(accountNo: number): boolean {

        return false;
    }

    deleteIndividual(accountNo: number): boolean {
        return false;
    }

    getAccounts(): Account[] {
        return this._accounts;
    }

    getIndividualByMobileNo(mobileNo: number): Individual {
        return undefined;
    }

    getIndividuals(): Individual[] {
        return this._individuals;
    }

    updateAccount(runningTotal: number, accountNo: number): Account {
        return undefined;
    }

    updateIndividual(mobileNo: number): Individual {
        return undefined;
    }
    get individuals(): Individual[] {
        return this._individuals;
    }

    get accounts(): Account[] {
        return this._accounts;
    }

    // @ts-ignore
    get individualMap(): Map<Individual, Account> {
        return this._individualMap;
    }
}