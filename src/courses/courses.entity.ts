
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {CourseComment} from "./course_comment.entity";


@Entity()
export class Course {


  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(type => CourseComment, courseComment => courseComment.course)
  courseComments: CourseComment[];

}
