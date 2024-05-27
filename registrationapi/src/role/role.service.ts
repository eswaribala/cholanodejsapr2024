import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Role, RoleDocument} from "./entities/role.entity";
import {Model} from "mongoose";

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private readonly roleModel:Model<RoleDocument>) {
  }
  async create(createRoleDto: CreateRoleDto) {
    return await new this.roleModel({
      ...createRoleDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll() {
    return await this.roleModel.find().exec()
  }

  async findOne(id: number) {
    return await this.roleModel.findOne({roleId:id}).exec()
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleModel.findOneAndUpdate({roleId:id},
        {roleName:updateRoleDto.roleName}).exec()
  }

  remove(id: number) {
    return this.roleModel.findOneAndDelete({roleId:id})
  }
}
