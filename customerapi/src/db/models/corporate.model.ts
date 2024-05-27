import Customer from "./customer.model";
import {Column, DataType, Table} from "sequelize-typescript";
import {Gender} from "./gender.enum";
import {CompanyType} from "./companyType.model";
@Table({
    tableName:"Corporate"
})
export class Corporate extends Customer{
    @Column({
        type:DataType.ENUM(...Object.values(CompanyType)),
        field:'companyType'

    })
    companyType?:CompanyType;
}