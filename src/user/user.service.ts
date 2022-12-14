import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../typeorm/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create.user.dto';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) { };

    async singUp(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.createUser(createUserDto);
    }

    async signIn(credentialsDto: CredentialsDto): Promise<{ accessToken: string }> {
        const { username, password } = credentialsDto;
        const user = await this.userRepository.findOne({ username });

        // リクエストのpasswordとDBのtokenを元に戻したpasswordを比較する
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { id: user.id, password: user.password, username: user.username };
            // id, password, usernameをtokenに変換して返す
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        throw new UnauthorizedException('入力したユーザー名またはパスワードが存在しません');
    }
}