import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CourseRepository} from "./courses.repository";
import {CreateCourseDto} from "./dto/create-course.dto";

@Injectable()
export class CoursesService {


  constructor(
    @InjectRepository(CourseRepository)
    private courseRepository: CourseRepository
  ){}



  getAllCourses(){
    return this.courseRepository.getAllCourses();
  }

  createCourse(createCourseDto : CreateCourseDto){
    return this.courseRepository.createCourse(createCourseDto);
  }

}
