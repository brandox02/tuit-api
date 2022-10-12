import { IsOptional, IsString } from "class-validator";

export class GetTuitsSearchParams {
  @IsString()
  @IsOptional()
  searchTerm: string;

  @IsString()
  @IsOptional()
  orderBy: string;
}
