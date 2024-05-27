import Customer from "./customer.model";
import {Column, DataType, Table} from "sequelize-typescript";
import {Gender} from "./gender.enum";
@Table({
    tableName:"Individual"
})
export default class Individual extends Customer{
    @Column({
        type:DataType.ENUM(...Object.values(Gender)),
        field:'gender'

    })
    gender?:Gender;

    @Column({
        type: DataType.DATE,
        field: "dob"
    })
    dob?: Date;
}