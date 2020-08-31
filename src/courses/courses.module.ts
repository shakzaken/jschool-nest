import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CourseRepository} from "./courses.repository";
import {User} from "../users/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository,User])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}


