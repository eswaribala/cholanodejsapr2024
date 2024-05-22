import {Gender} from "../entities/gender";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCustomerDto {

    @ApiProperty()
    private firstName:string;
    @ApiProperty()
    private lastName:string;
    @ApiProperty()
    private dob:Date;
    @ApiProperty()
    private gender:Gender;
    @ApiProperty()
    private email:string
    @ApiProperty()
    private mobileNo:number;

}
