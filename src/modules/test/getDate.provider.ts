import { Inject } from "@nestjs/common";
import { ConfigService as ConfigServiceNest } from "@nestjs/config";

// for use class without have a service file, also can customize the provide token key with a class
export class GetDateProvider {
  private date: Date;
  constructor(
    @Inject(ConfigServiceNest) private readonly f: ConfigServiceNest // @Inject(CONFIG_SERVICE) private readonly fe: ConfigService
  ) {}

  getDate(): Date {
    // console.log("in getDate method: ", this.fe);
    return this.date;
  }

  setDate(date: Date): Date {
    this.date = date;
    return this.date;
  }
}

// export const getDateProvider: Provider<GetDateProvider> = {
//   provide: GetDateProvider,
//   useClass: GetDateProvider,
// };
