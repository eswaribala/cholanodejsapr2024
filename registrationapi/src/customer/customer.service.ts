import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {Customer, CustomerDocument} from "./entities/customer.entity";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {DeleteCustomerDto} from "./dto/delete-customer.dto";

@Injectable()
export class CustomerService {
//dependency injecttion
constructor(@InjectModel(Customer.name)private readonly customerModel:Model<CustomerDocument>) {
}


  async create(createCustomerDto: CreateCustomerDto) {
    return await new this.customerModel({
      ...createCustomerDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll() {
    return await this.customerModel.find().exec()
  }

  async findOne(mobileNo: number) {
    return await this.customerModel.findOne({mobileNo:mobileNo}).exec()
  }

  async update(updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.findByIdAndUpdate({mobileNo:updateCustomerDto.mobileNo},
        {email:updateCustomerDto.email}).exec()
  }

  remove(deleteCustomerDto: DeleteCustomerDto) {
    return this.customerModel.findOneAndDelete({mobileNo:deleteCustomerDto.mobileNo})
  }
}
