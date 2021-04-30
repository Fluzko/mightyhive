import { getConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const connectionOptions = async (): Promise<any> => ({
  ...(await getConnectionOptions()),
  autoLoadEntities: true,
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  timezone: "Z"
});
export const getIdColumnType = (): string =>
  process.env.NODE_ENV === "test" ? "integer" : "bigint";
