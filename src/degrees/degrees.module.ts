import { Module } from '@nestjs/common';
import { DegreesController } from './degrees.controller';
import { DegreesService } from './degrees.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DegreesRepository} from "./degrees.repository";

@Module({
  imports:[TypeOrmModule.forFeature([DegreesRepository])],
  controllers: [DegreesController],
  providers: [DegreesService]
})
export class DegreesModule {}
