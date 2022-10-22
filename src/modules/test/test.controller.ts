import { Controller, Inject, Optional } from "@nestjs/common";
import { ConfigService, CONFIG_SERVICE } from "./configService.provider";
import { FACTORY_PROVIDER } from "./factory.provider";
import { GetDateProvider } from "./getDate.provider";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(
    private readonly f: TestService,
    // the optional param is for not exploit the compilation if this dependency is not resolved for any reason
    @Optional() @Inject(CONFIG_SERVICE) private readonly f2: ConfigService,
    private readonly getDateClass: GetDateProvider,
    @Inject(FACTORY_PROVIDER) private readonly t3: string //  private readonly formatToMoney: MoneyProvider
  ) {
    console.log("In the compilation we go to modify the date,.,");

    this.getDateClass.setDate(new Date("2020-10-05"));

    console.log("Ok the date was changed to: ", this.getDateClass.getDate());
  }
}
