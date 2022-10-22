import { DynamicModule, Module } from "@nestjs/common";
import { MoneyProvider } from "./dynamic-module.provider";

@Module({})
export class DynamicModuleModule {
  static registerAsync(decimal = true): DynamicModule {
    return {
      module: DynamicModuleModule,
      providers: [
        { provide: "DynamicModuleModuleDecimal", useValue: decimal },
        MoneyProvider,
      ],
      exports: [MoneyProvider],
    };
  }
}
