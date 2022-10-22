import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnectionOptions } from "typeorm";
import { Environment } from "../common/enum";

// import us dynamically the typeorm module for create the connection with de database.
export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const isDevEnv = config.get("NODE_ENV") !== Environment.PRODUCTION;
    const dbConfig = {
      type: config.get("DB_TYPE"),
      host: config.get("DB_HOST"),
      port: +config.get("DB_PORT"),
      username: config.get("DB_USERNAME"),
      password: config.get("DB_PASSWORD"),
      database: config.get("DB_DATABASE"),
      ...(config.get("DB_LOGGING") === "true" ? { logging: true } : {}),

      autoLoadEntities: true,
      synchronize: isDevEnv,
    } as ConnectionOptions;

    return dbConfig;
  },
});
