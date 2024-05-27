import {Gender} from "./gender";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
export type CustomerDocument=Customer & Document

@Schema() //decorator
export class Customer {
    @Prop({required:true})
    private firstName:string;
    @Prop()
    private lastName:string;
    @Prop()
    private dob:Date;
    @Prop()
    private gender:Gender;
    @Prop()
    private email:string
    @Prop({required:true})
    private mobileNo:number;
    @Prop()
    private createdAt:Date;

}

export const CustomerSchema=SchemaFactory.createForClass(Customer)
