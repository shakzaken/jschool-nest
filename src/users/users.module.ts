import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {UsersRepository} from "./users.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CourseComment} from "../courses/comment/course_comment.entity";


@Module({
  imports:[TypeOrmModule.forFeature([UsersRepository,CourseComment])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
