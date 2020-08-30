import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Course} from "./course/course.entity";

@Module({
  imports: [
    CourseModule,
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
