import { HandlerService } from "./handler.service";
export declare class HandlerController {
    private handlerService;
    constructor(handlerService: HandlerService);
    confirmReservation(key: string): Promise<import("./keyVal.entity").KeyVal>;
}
