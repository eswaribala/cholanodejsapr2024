import {IndividualDao} from "./individualdao";
import {Individual} from "../models/Individual";

export interface ExtendedIndividualDao extends IndividualDao{
    getIndividualByMobileNo:(mobileNo:number)=>Individual
}