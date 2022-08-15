import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/typeorm/users.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('signup')
    async singUp(
        @Body()
        createUserDto: CreateUserDto
    ): Promise<User> {
        return await this.userService.singUp(createUserDto);
    };

    @Post('signin')
    async signIn(
        @Body()
        credentialsDto: CredentialsDto
    ): Promise<{ accessToken: string }> {
        return await this.userService.signIn(credentialsDto);
    };
}; 
