import { IsNotEmpty } from "class-validator";

export class CreateUserDto{  //NO TOCAR//
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}