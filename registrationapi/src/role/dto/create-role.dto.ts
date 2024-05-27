import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty()
    roleId:number;
    @ApiProperty()
    roleName:string;
}
