import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CourseRepository} from "./courses.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}


