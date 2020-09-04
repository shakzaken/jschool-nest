import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {User} from "../users/user.entity";
import {LoginDto} from "./dto/login-dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {


  constructor(
    private userService: UsersService,
    private jwtService: JwtService){}




  async login(loginDto : LoginDto) {
    const user = await this.validateUser(loginDto);
    const payload = {
      email: user.email,
      name: user.name
    };
    const token =  this.jwtService.sign(payload);
    return { token: token }

  }

  async validateUser(loginDto:LoginDto): Promise<User>{
    const {email,password} = loginDto;
    const user = await this.userService.getUserByEmail(email);
    if(user && user.password === password){
      return user;
    }else{
      throw new UnauthorizedException();
    }


  }




}
