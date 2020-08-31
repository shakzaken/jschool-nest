import {Repository, EntityRepository} from "typeorm";
import {Degree} from "./degree.entity";
import {CreateDegreeDto} from "./dto/createDegreeDto";



@EntityRepository(Degree)
export class DegreesRepository extends Repository<Degree> {


  getAllDegrees() : Promise<Degree[]>{
    return this.find({});
  }

  async createDegree(createDegreeDto : CreateDegreeDto) : Promise<Degree>{
    const degree = new Degree();
    degree.name = createDegreeDto.name;
    degree.description = createDegreeDto.description;
    await this.save(degree);
    return degree;
  }

}