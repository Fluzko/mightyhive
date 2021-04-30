import { Controller, Get, Param } from "@nestjs/common";
import { HandlerService } from "./handler.service";

@Controller()
export class HandlerController {
  constructor(private handlerService: HandlerService) {}

  @Get("/:key")
  confirmReservation(@Param("key") key: string) {
    return this.handlerService.getByKey(key);
  }
}
