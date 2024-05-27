import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import {CreateCustomerDto} from "./dto/create-customer.dto";

describe('CustomerService', () => {
  let service: CustomerService;
  let createCustomerDto:CreateCustomerDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    createCustomerDto=new CreateCustomerDto();
    createCustomerDto.firstName="parameswari"
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('check create method', () => {
    expect(service.create(createCustomerDto)).toBeTruthy();
  });
});
