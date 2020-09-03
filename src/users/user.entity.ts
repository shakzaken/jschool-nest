import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {CourseComment} from "../courses/comment/course_comment.entity";
import {DegreeComment} from "../degrees/degree-comment.entity";



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

  @OneToMany(type => DegreeComment, degreeComment => degreeComment.user)
  degreeComments: DegreeComment[];
}
