import {Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Course} from "../courses/courses.entity";
import {DegreeComment} from "./degree-comment.entity";


@Entity()
export class Degree {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  description: string;


  @OneToMany(type => DegreeComment, degreeComments => degreeComments.degree)
  degreeComments: DegreeComment[];

  @ManyToMany(type => Course)
  @JoinTable({name:"degree_courses"})
  courses: Course[];

}
