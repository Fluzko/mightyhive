import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HandlerService } from "./handler.service";
import { HandlerController } from "./handler.controller";
import { KeyValGateway } from "./keyVal.gateway";
import { KeyVal } from "./keyVal.entity";

@Module({
  imports: [TypeOrmModule.forFeature([KeyVal])],
  providers: [HandlerService, KeyValGateway],
  controllers: [HandlerController]
})
export class HandlerModule {}
