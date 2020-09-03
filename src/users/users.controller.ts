import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user-dto";
import {User} from "./user.entity";
import {CreateUserImageDto} from "./dto/createUserImage.dto";


@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ){}



  @Get()
  getUsers() : Promise<User[]>{
    return this.usersService.getAllUsers();
  }

  @Get("/images/:userId")
  getUserImagesById(@Param() param){
    return this.usersService.getUserImagesById(param.userId);
  }


  @Post()
  createUser(@Body() createUserDto: CreateUserDto) : Promise<User>{
    return this.usersService.createUser(createUserDto);
  }

  @Post("/images")
  createUserImage(@Body() createUserImageDto: CreateUserImageDto) {
    return this.usersService.createUserImage(createUserImageDto);
  }



}
