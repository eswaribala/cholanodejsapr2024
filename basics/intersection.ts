import {CompanyType} from "../models/companytype";

interface GST{
    gstNo:number
    password:string
}

interface ServiceTax{
    serviceTaxNo:string
    category:CompanyType
}

interface TDS{
    percentageOfDeduction:number
}
//intersection
type SelfEmployed=GST & TDS
type MSME= GST & ServiceTax

let doctor:SelfEmployed={
    gstNo:487368743,
    password:"Test@123",
    percentageOfDeduction:0.12
}

let rps:MSME={
    gstNo:487368743,
    password:"Test@123",
    serviceTaxNo:"S23560",
    category:CompanyType.PRIVATE
}

console.log(doctor)
console.log(rps)