import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersService} from "../users/users.service";
import {JwtService,JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {jwtConstants} from "../config/auth";
import {PassportModule} from "@nestjs/passport";
import { AuthController } from './auth.controller';


@Module({
  imports:[UsersModule,PassportModule,JwtModule.register({
    secret:jwtConstants.secret,
    signOptions: {expiresIn: "24h"}
  })],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController]

})
export class AuthModule {}
