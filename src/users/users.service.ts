import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {CreateUserDto} from "./dto/create-user-dto";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository
  ){}


  getAllUsers(){
    return this.usersRepository.getAllUsers();
  }

  createUser(createUserDto : CreateUserDto){
    return this.usersRepository.createUser(createUserDto);
  }


}
