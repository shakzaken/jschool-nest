import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {CourseComment} from "../courses/course_comment.entity";



@Entity()
export class User {


  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  email: string;


  @OneToMany(type => CourseComment, courseComment => courseComment.user)
  courseComments: CourseComment[];

}
