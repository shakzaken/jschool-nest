import { Controller,Get,Post,Body } from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user-dto";
import {User} from "./user.entity";


@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ){}



  @Get()
  getUsers() : Promise<User[]>{
    return this.usersService.getAllUsers();
  }


  @Post()
  createUser(@Body() createUserDto: CreateUserDto) : Promise<User>{
    return this.usersService.createUser(createUserDto);
  }


}
