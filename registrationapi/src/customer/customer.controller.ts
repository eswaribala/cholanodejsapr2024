import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {DeleteCustomerDto} from "./dto/delete-customer.dto";

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/v1.0')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get('/v1.0')
  findAll() {
    return this.customerService.findAll();
  }

  @Get('/v1.0:mobileNo')
  findOne(@Param('mobileNo') mobileNo: number) {
    return this.customerService.findOne(mobileNo);
  }

  @Patch('/v1.0')
  update(@Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(updateCustomerDto);
  }

  @Delete('/v1.0')
  remove(@Body() deleteCustomerDto: DeleteCustomerDto) {
    return this.customerService.remove(deleteCustomerDto);
  }
}
