import {Column, DataType, ForeignKey, Model, PrimaryKey, Table,BelongsTo} from "sequelize-typescript";

import Customer from "./customer.model";

@Table({
    tableName:'Address'
})
export class Address extends Model<Address>{
    @Column({
        field:'doorNo',
        type: DataType.STRING
    })
    doorNo?: string;
    @Column({
        field:'streetName',
        type: DataType.STRING
    })
    streetName?:string;
    @Column({
        field:'city',
        type: DataType.STRING
    })
    city?:string;


    @ForeignKey(() => Customer)
    @Column({primaryKey:true})
    id?: number;

    @BelongsTo(() => Customer)
    customer!: Customer;

}