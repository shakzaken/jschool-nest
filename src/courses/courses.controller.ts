import {Controller, Get, Post , Body} from '@nestjs/common';
import {CoursesService} from "./courses.service";
import {CreateCourseDto} from "./dto/create-course.dto";
import {Course} from "./courses.entity";

@Controller('courses')
export class CoursesController {

  constructor(
    private coursesService: CoursesService
  ){}

  @Get()
  getCourses(){
    return this.coursesService.getAllCourses();
  }


  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto){
    const course :Course =  await this.coursesService.createCourse(createCourseDto);
    return course;
  }

}
