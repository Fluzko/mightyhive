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
exports.KeyValGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const handler_service_1 = require("./handler.service");
const keyVal_entity_1 = require("./keyVal.entity");
let KeyValGateway = class KeyValGateway {
    constructor(handlerService) {
        this.handlerService = handlerService;
    }
    handleSendMessage(data, client) {
        const { key, value } = JSON.parse(JSON.stringify(data));
        if (!(key && value)) {
            client.emit("socket-error", "Invalid data");
            return;
        }
        const keyVal = new keyVal_entity_1.KeyVal();
        keyVal.key = key;
        keyVal.value = value;
        this.handlerService.save(keyVal);
        client.emit("saveKey", "a");
    }
};
__decorate([
    websockets_1.SubscribeMessage("saveKey"),
    __param(0, websockets_1.MessageBody()),
    __param(1, websockets_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KeyValGateway.prototype, "handleSendMessage", null);
KeyValGateway = __decorate([
    websockets_1.WebSocketGateway(4001, { namespace: "/keyVal" }),
    __metadata("design:paramtypes", [handler_service_1.HandlerService])
], KeyValGateway);
exports.KeyValGateway = KeyValGateway;
//# sourceMappingURL=keyVal.gateway.js.map