import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Course} from "./courses/courses.entity";
import { UsersModule } from './users/users.module';
import { DegreesModule } from './degrees/degrees.module';
import {User} from "./users/user.entity";
import {Degree} from "./degrees/degree.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password:"1234",
      database: "jschool",
      entities: [Course,User,Degree],
      synchronize: true
    }),
    UsersModule,
    DegreesModule,
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
