import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DegreesRepository} from "./degrees.repository";
import {Degree} from "./degree.entity";
import {CreateDegreeCommentDto} from "./dto/create-degree-comment.dto";
import {UsersRepository} from "../users/users.repository";
import {DegreeCommentsRepository} from "./degree-comments.repository";
import {DegreeComment} from "./degree-comment.entity";


@Injectable()
export class DegreesService {

  constructor(
    @InjectRepository(DegreesRepository)
    private degreesRepository: DegreesRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @InjectRepository(DegreeCommentsRepository)
    private degreeCommentsRepository : DegreeCommentsRepository
  ){}


  getAllDegrees() : Promise<Degree[]>{
    return this.degreesRepository.getAllDegrees();
  }

  getDegreeCommentsById(degreeId:number) : Promise<DegreeComment[]>{
    return this.degreeCommentsRepository.getDegreeCommentsById(degreeId);
  }

  createDegree(createDegreeDto) : Promise<Degree> {
    return this.degreesRepository.createDegree(createDegreeDto);
  }

  async createDegreeComment(createDegreeCommentDto :CreateDegreeCommentDto) : Promise<DegreeComment> {
    const {degreeId, userId, comment} = createDegreeCommentDto;

    const user = await this.usersRepository.getUserById(userId);
    const degree = await this.degreesRepository.getDegreeById(degreeId);
    const result = await this.degreeCommentsRepository.createDegreeComment(user,degree,comment);
    return result;

  }

}
