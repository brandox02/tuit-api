import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export type FactoryProvider = {
  value: string;
};

export const FACTORY_PROVIDER = "FACTORY_PROVIDER";

export const factoryProvider: Provider<FactoryProvider> = {
  provide: FACTORY_PROVIDER,
  useFactory: async (configService: ConfigService) => {
    console.log("in factory: ", configService.get("DB_PORT"));
    return {
      value: "valor de useFactory",
    };
  },
  inject: [ConfigService],
};
