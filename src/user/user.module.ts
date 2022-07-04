import { UserToken } from './userToken';
import { AuthController } from './auth.controller';
import { User } from './user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserToken]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" }
    })
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, TokenService]
})
export class UserModule {}
