import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HandlerModule } from "./handler/handler.module";
import { connectionOptions } from "./orm.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: connectionOptions
    }),
    HandlerModule
  ]
})
export class AppModule {}
