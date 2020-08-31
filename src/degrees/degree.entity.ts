import {Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable} from "typeorm";
import {Course} from "../courses/courses.entity";


@Entity()
export class Degree {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  description: string;


  @ManyToMany(type => Course)
  @JoinTable({name:"degree_courses"})
  courses: Course[];

}
