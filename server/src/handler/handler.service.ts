import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { KeyVal } from "./keyVal.entity";
@Injectable()
export class HandlerService {
  constructor(
    @InjectRepository(KeyVal)
    private keyValRepository: Repository<KeyVal>
  ) {}

  async getByKey(key: string) {
    try {
      const keyVal: KeyVal = await this.keyValRepository.findOneOrFail({
        where: { key }
      });
      return keyVal;
    } catch (e) {
      throw new BadRequestException("Key not found");
    }
  }

  async save(keyVal: KeyVal): Promise<KeyVal> {
    try {
      const persisted = await this.keyValRepository.save(keyVal);
      return persisted;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
