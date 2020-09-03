import {EntityRepository,Repository} from "typeorm";
import {Course} from "./courses.entity";
import {CreateCourseDto} from "./dto/create-course.dto";
import {} from "@nestjs/typeorm";
import {CreateCourseCommentDto} from "./dto/create-course-comment.dto";
import {User} from "../users/user.entity";


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


  async createCourseComment(createCourseCommentDto : CreateCourseCommentDto){
    const {courseId,userId,comment} = createCourseCommentDto;
  }

  async getAllCourses() : Promise<Course[]>{
    return this.find({});
  }

  async getCourseById(id:number) : Promise<Course>{
    return this.findOne({id: id});
  }

}
