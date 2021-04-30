import { Repository } from "typeorm";
import { KeyVal } from "./keyVal.entity";
export declare class HandlerService {
    private keyValRepository;
    constructor(keyValRepository: Repository<KeyVal>);
    getByKey(key: string): Promise<KeyVal>;
    save(keyVal: KeyVal): Promise<KeyVal>;
}
