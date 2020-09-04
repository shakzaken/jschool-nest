import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {CreateUserDto} from "./dto/create-user-dto";
import {UserImageRepository} from "./images/user-image.repository";
import {CreateUserImageDto} from "./dto/createUserImage.dto";
import {UserImage} from "./images/user-image.entity";
import {User} from "./user.entity";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @InjectRepository(UserImageRepository)
    private userImageRepository: UserImageRepository
  ){}


  getAllUsers(){
    return this.usersRepository.getAllUsers();
  }

  getUserImagesById(userId:number) : Promise<UserImage[]>{
    return this.userImageRepository.getUserImagesById(userId);
  }

  createUser(createUserDto : CreateUserDto){
    return this.usersRepository.createUser(createUserDto);
  }

  async createUserImage(createUserImageDto:CreateUserImageDto) : Promise<UserImage>{
    const {userId,image} = createUserImageDto;
    const user = await this.usersRepository.getUserById(userId);
    const result = await this.userImageRepository.createUserImage(user,image);
    return result;
  }


  getUserByEmail(email:string) : Promise<User>{
    return this.usersRepository.getUserByEmail(email);
  }



}
