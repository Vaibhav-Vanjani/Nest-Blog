import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Post('create')
    createUser(@Body() user:UserDto){
        return this.userService.userCreate(user);
    }

    @Post('delete')
    deleteUserByRole(@Query('role') role:string){
        return this.userService.userDeleteByRole(role);
    }

    @Post('delete/:id')
    deleteUserById(@Param('id') id:string){
        return this.userService.userDeleteById(+id);
    }
}
