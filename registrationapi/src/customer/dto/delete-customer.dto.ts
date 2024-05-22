import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import {ApiProperty} from "@nestjs/swagger";

export class DeleteCustomerDto extends PartialType(CreateCustomerDto) {

    @ApiProperty()
    private mobileNo:number

}
