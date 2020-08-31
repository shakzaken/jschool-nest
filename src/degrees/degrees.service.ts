import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DegreesRepository} from "./degrees.repository";
import {Degree} from "./degree.entity";


@Injectable()
export class DegreesService {

  constructor(
    @InjectRepository(DegreesRepository)
    private degreesRepository: DegreesRepository
  ){}


  getAllDegrees() : Promise<Degree[]>{
    return this.degreesRepository.getAllDegrees();
  }

  createDegree(createDegreeDto) : Promise<Degree> {
    return this.degreesRepository.createDegree(createDegreeDto);
  }

}
