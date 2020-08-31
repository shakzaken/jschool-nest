import {Body, Controller, Get, Post} from '@nestjs/common';
import {DegreesService} from "./degrees.service";
import {CreateDegreeDto} from "./dto/createDegreeDto";
import {Degree} from "./degree.entity";

@Controller('degrees')
export class DegreesController {


  constructor(
    private degreesService : DegreesService
  ){}

  @Get()
  getDegrees() : Promise<Degree[]>{
    return this.degreesService.getAllDegrees();
  }

  @Post()
  createDegree(@Body() createDegreeDto : CreateDegreeDto ) : Promise<Degree>{
    return this.degreesService.createDegree(createDegreeDto);
  }


}
