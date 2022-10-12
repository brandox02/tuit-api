import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
  @IsPositive()
  @IsNumber()
  @IsOptional()
  offset: number;

  @IsPositive()
  @IsNumber()
  @IsOptional()
  limit: number;
}
