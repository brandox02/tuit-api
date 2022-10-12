import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CreateTuitDto, UpdateTuitDto } from "./dto";
import { PaginationDto } from "./dto/pagination.dto";
import { Tuit } from "./tuits.entity";
import { TuitsService } from "./tuits.service";

@Controller("tuits")
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  async getTuits(
    @Query()
    params: PaginationDto
  ): Promise<Array<Tuit>> {
    return await this.tuitService.getAll(params);
  }

  @Get(":id")
  async getTuit(@Param("id") id: string): Promise<Tuit> {
    return await this.tuitService.getOne(parseInt(id));
  }

  @Post()
  async createTuit(@Body() payload: CreateTuitDto): Promise<Tuit> {
    return await this.tuitService.create(payload);
  }

  @Patch(":id")
  async updateTuit(
    @Param("id") id: string,
    @Body() body: UpdateTuitDto
  ): Promise<Tuit> {
    return await this.tuitService.update(parseInt(id), body);
  }

  @Delete(":id")
  async deleteTuit(@Param("id") id: string): Promise<Tuit | string> {
    return await this.tuitService.delete(parseInt(id));
  }
}
