import {IndividualDao} from "../facades/individualdao";
import {AccountDao} from "../facades/accountDao";
import {ExtendedIndividualDao} from "../facades/extendedIndividualdao";
import {Account} from "../models/account";
import {Individual} from "../models/Individual";

export  class individualImpl implements ExtendedIndividualDao,AccountDao{
    addAccount(account: Account): Account {
        return undefined;
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