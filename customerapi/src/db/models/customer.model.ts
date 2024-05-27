import { Model, Table, Column, DataType } from "sequelize-typescript";


@Table({
    tableName: "customers"
})

export default class Customer extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id?: number;

    @Column({
        type:DataType.STRING,
        field:'firstName'
    })
    firstName?:string
    @Column({
        type:DataType.STRING,
        field:'middleName'
    })
    middleName?:string
    @Column({
        type:DataType.STRING,
        field:'lastName'
    })
    lastName?:string

    @Column({
        type: DataType.BIGINT,
        field: "mobileNo"
    })
    mobileNo?: number;


}