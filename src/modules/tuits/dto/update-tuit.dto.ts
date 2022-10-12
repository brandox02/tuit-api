import { IsNumber, IsPositive, IsString } from "class-validator";

export class UpdateTuitDto {
  @IsString()
  readonly message: string;

  @IsNumber()
  @IsPositive()
  readonly userId: number;
}
