import { IsObject, IsString } from "class-validator";

class CreateUserDto {
  @IsString()
  fullname: string;
}

export class CreateTuitDto {
  @IsString()
  readonly message: string;

  @IsObject()
  readonly user: CreateUserDto;
}
