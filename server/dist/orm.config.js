"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdColumnType = exports.connectionOptions = void 0;
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.connectionOptions = async () => (Object.assign(Object.assign({}, (await typeorm_1.getConnectionOptions())), { autoLoadEntities: true, migrations: [`${__dirname}/migrations/**/*{.ts,.js}`], namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(), synchronize: true, timezone: "Z" }));
exports.getIdColumnType = () => process.env.NODE_ENV === "test" ? "integer" : "bigint";
//# sourceMappingURL=orm.config.js.map