import {EntityRepository,Repository} from "typeorm";
import {Course} from "./courses.entity";
import {CreateCourseDto} from "./dto/create-course.dto";
import {} from "@nestjs/typeorm";



@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

  async createCourse(createCourseDto : CreateCourseDto) : Promise<Course> {
    const {name,description} = createCourseDto;
    const course = new Course();
    course.name = name;
    course.description = description;
    await this.save(course);
    return course;
  }

  async getAllCourses() : Promise<Course[]>{
    return this.find({});
  }

}
