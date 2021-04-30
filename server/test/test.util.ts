import { Type, INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Connection, QueryRunner } from "typeorm";
import { AppModule } from "../src/app.module";

let app: INestApplication;
let queryRunner: QueryRunner;
let connection: Connection;

export const setupTestEnvironment = async (): Promise<void> => {
  if (!app) {
    app = await NestFactory.create(AppModule);
    connection = app.get<Connection>(Connection);
    queryRunner = connection.createQueryRunner();
  }
};

export const getProvider = (providerType: Type<any>): any => {
  return app.get<any>(providerType);
};

export const getRepository = (entityType: Type<any>): any => {
  return connection.getRepository(entityType);
};

export const startTransaction = (): Promise<void> =>
  queryRunner.startTransaction();

export const rollbackTransaction = (): Promise<void> =>
  queryRunner.rollbackTransaction();
