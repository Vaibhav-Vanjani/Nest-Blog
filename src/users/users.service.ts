import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto/user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    constructor(private prisma:DatabaseService){}

    async userCreate(user:UserDto){
        try {
            console.log("inside userCreate:::");
            const response = await this.prisma.user.create({
                data:user,
            })
             console.log("inside userCreate:::",response);
            return {
                success:true,
                data:response,
            }
        } catch (error) {
            console.log(error,"error occured while creating user in database");
             return {
                success:false,
                data:"Internal Server Error",
            }
        }
    }

    userDeleteById(userId:number){
        return {
            success:true,
            data:userId,
        }
    }

    userDeleteByRole(role:string){
        return {
            success:true,
            data:role,
        }
    }
}
