"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const keyVal_entity_1 = require("./keyVal.entity");
let HandlerService = class HandlerService {
    constructor(keyValRepository) {
        this.keyValRepository = keyValRepository;
    }
    async getByKey(key) {
        try {
            const keyVal = await this.keyValRepository.findOneOrFail({
                where: { key }
            });
            return keyVal;
        }
        catch (e) {
            throw new common_1.BadRequestException("Key not found");
        }
    }
    async save(keyVal) {
        try {
            const persisted = await this.keyValRepository.save(keyVal);
            return persisted;
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
HandlerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(keyVal_entity_1.KeyVal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HandlerService);
exports.HandlerService = HandlerService;
//# sourceMappingURL=handler.service.js.map