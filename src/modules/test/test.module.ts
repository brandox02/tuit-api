import { Module } from "@nestjs/common";
import { DynamicModuleModule } from "../dynamic-module/dynamic-module.module";
import { ConfigServiceProvider } from "./configService.provider";
import { factoryProvider } from "./factory.provider";
import { GetDateProvider } from "./getDate.provider";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

@Module({
  imports: [DynamicModuleModule.registerAsync()],
  providers: [
    TestService,
    ConfigServiceProvider,
    factoryProvider,
    GetDateProvider,
  ],
  controllers: [TestController],
  exports: [factoryProvider],
})
export class TestModule {}
