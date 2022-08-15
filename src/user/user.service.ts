import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm/users.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) { };

    async singUp(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.createUser(createUserDto);
    }
}