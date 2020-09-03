import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {DegreesService} from "./degrees.service";
import {CreateDegreeDto} from "./dto/createDegreeDto";
import {Degree} from "./degree.entity";
import {CreateDegreeCommentDto} from "./dto/create-degree-comment.dto";

@Controller('degrees')
export class DegreesController {


  constructor(
    private degreesService : DegreesService
  ){}

  @Get()
  getDegrees() : Promise<Degree[]>{
    return this.degreesService.getAllDegrees();
  }

  @Get("/comments/:degreeId")
  getDegreeComments(@Param() param){
    return this.degreesService.getDegreeCommentsById(param.degreeId)
  }

  @Post()
  createDegree(@Body() createDegreeDto : CreateDegreeDto ) : Promise<Degree>{
    return this.degreesService.createDegree(createDegreeDto);
  }

  @Post("/comments")
  createDegreeComment(@Body() createDegreeCommentsDto: CreateDegreeCommentDto){
    return this.degreesService.createDegreeComment(createDegreeCommentsDto);
  }


}
