import {Column,PrimaryGeneratedColumn,Entity } from "typeorm";



@Entity()
export class Degree {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  @Column()
  description: string;


}
