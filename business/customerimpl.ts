import {IndividualDao} from "../facades/individualdao";
import {AccountDao} from "../facades/accountDao";
import {ExtendedIndividualDao} from "../facades/extendedIndividualdao";
import {Account} from "../models/account";
import {Individual} from "../models/Individual";

//multiple inheritance
export  class IndividualImpl implements ExtendedIndividualDao,AccountDao{
    private individuals:Individual[];
    private accounts:Account[];
    // @ts-ignore
    private individualMap:Map<Individual,Account>;


    constructor() {
        this.individuals=new Array();
        this.accounts=new Array();
        // @ts-ignore
        this.individualMap=new Map<Individual,Account>();

    }

    addAccount(account: Account): Account {

    }

    addIndividual(individual: Individual): Individual {
        return undefined;
    }

    deleteAccount(accountNo: number): boolean {
        return false;
    }

    deleteIndividual(accountNo: number): boolean {
        return false;
    }

    getAccounts(): Account[] {
        return [];
    }

    getIndividualByMobileNo(mobileNo: number): Individual {
        return undefined;
    }

    getIndividuals(): Individual[] {
        return [];
    }

    updateAccount(runningTotal: number, accountNo: number): Account {
        return undefined;
    }

    updateIndividual(mobileNo: number): Individual {
        return undefined;
    }

}