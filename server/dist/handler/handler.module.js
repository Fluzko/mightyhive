"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const handler_service_1 = require("./handler.service");
const handler_controller_1 = require("./handler.controller");
const keyVal_gateway_1 = require("./keyVal.gateway");
const keyVal_entity_1 = require("./keyVal.entity");
let HandlerModule = class HandlerModule {
};
HandlerModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([keyVal_entity_1.KeyVal])],
        providers: [handler_service_1.HandlerService, keyVal_gateway_1.KeyValGateway],
        controllers: [handler_controller_1.HandlerController]
    })
], HandlerModule);
exports.HandlerModule = HandlerModule;
//# sourceMappingURL=handler.module.js.map