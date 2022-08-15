import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'secretKey123',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    controllers: [UserController],
    providers: [UserService, JwtStrategy, JwtAuthGuard],
    exports: [JwtStrategy, JwtAuthGuard],
})
export class UserModule { }
