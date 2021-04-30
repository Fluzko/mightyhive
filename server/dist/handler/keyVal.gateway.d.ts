import { Socket } from "socket.io";
import { HandlerService } from "./handler.service";
export declare class KeyValGateway {
    private handlerService;
    constructor(handlerService: HandlerService);
    handleSendMessage(data: string, client: Socket): void;
}
