import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TuitsModule } from "./modules/tuits/tuits.module";
import { UserModule } from "./modules/user/user.module";
import { DatabaseModule } from "./database/database.module";
import { TestModule } from "./modules/test/test.module";
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TuitsModule,
    UserModule,
    DatabaseModule,
    TestModule,
    AuthModule,
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get("PORT");
    // AppModule.port = 9000;
  }
}
