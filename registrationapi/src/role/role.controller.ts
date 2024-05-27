import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('/v1.0')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get('/v1.0')
  findAll() {
    return this.roleService.findAll();
  }

  @Get('/v1.0:id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch('/v1.0:id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete('/v1.0:id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
