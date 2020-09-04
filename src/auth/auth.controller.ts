import { Controller,Post,Body } from '@nestjs/common';
import {LoginDto} from "./dto/login-dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private authService:AuthService){}

  @Post("/login")
  login(@Body() loginDto : LoginDto){
    return this.authService.login(loginDto);
  }

}
