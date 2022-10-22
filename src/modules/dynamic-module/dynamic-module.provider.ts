import { Inject } from "@nestjs/common";

export class MoneyProvider {
  constructor(
    @Inject("DynamicModuleModuleDecimal") private readonly decimal: boolean
  ) {}
  formatToMoney(amount: number): string {
    // console.log("in dynamic module the date is:", this.getDateClass.getDate());
    return `$${amount}${this.decimal ? ".00" : ""}`;
  }
}

// export const moneyProvider: Provider<MoneyProvider> = {
//   provide: MoneyProvider,
//   useClass: MoneyProvider,
// };
