import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { LocalStrategyProvider } from "./localStrategy.provider";

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategyProvider],
})
export class AuthModule {}
