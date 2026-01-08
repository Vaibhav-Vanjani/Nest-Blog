import { IsString , IsInt } from "class-validator";

export class UserDto {
    @IsInt()
    userId:number;
    
    @IsString()
    firstName:string;
    
    @IsString()
    lastName:string;
    
    @IsString()
    bio:string;
}
