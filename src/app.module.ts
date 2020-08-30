import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './course/courses.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Course} from "./course/courses.entity";

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password:"1234",
      database: "jschool",
      entities: [Course],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
