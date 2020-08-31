import { Module } from '@nestjs/common';
import { DegreesController } from './degrees.controller';
import { DegreesService } from './degrees.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DegreesRepository} from "./degrees.repository";
import {Degree} from "./degree.entity";
import {Course} from "../courses/courses.entity";

@Module({
  imports:[TypeOrmModule.forFeature([DegreesRepository,Degree,Course])],
  controllers: [DegreesController],
  providers: [DegreesService]
})
export class DegreesModule {}
