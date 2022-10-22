import { Provider } from "@nestjs/common";

// In this way you can return any type of data and customize de key token with string, enum, symbol
const configServiceValue = { hola: "hola mundo" };
export type ConfigService = typeof configServiceValue;
export const CONFIG_SERVICE = "CONFIG_SERVICE";
export const ConfigServiceProvider: Provider<ConfigService> = {
  provide: CONFIG_SERVICE,
  useValue: configServiceValue,
};
