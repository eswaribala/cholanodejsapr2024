import {Individual} from "../models/Individual";

export interface IndividualDao{
    ipAddress?:string; //optional
    portNo?:number //optional
    addIndividual:(individual:Individual)=>Individual;
    getIndividuals:()=>Individual[];
    updateIndividual:(mobileNo:number)=>Individual;
    deleteIndividual:(accountNo:number)=>boolean;
}