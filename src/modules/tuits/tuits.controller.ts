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
import { Tuit } from "./tuits.entity";
import { TuitsService } from "./tuits.service";
import { GetTuitsSearchParams, ResourceNotFoundError } from "./tuits.types";

@Controller("tuits")
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(
    @Query()
    searchParams: GetTuitsSearchParams
  ): Array<Tuit> {
    const { searchTerm = "", orderBy = "" }: GetTuitsSearchParams =
      searchParams;
    console.log(`Tuits filter by ${searchTerm} and order by ${orderBy}`);
    return this.tuitService.getAll();
  }

  @Get(":id")
  getTuit(@Param("id") id: string): Tuit {
    return this.tuitService.getOne(parseInt(id));
  }

  @Post()
  createTuit(@Body() payload: CreateTuitDto): Tuit {
    return this.tuitService.create(payload);
  }

  @Patch(":id")
  updateTuit(
    @Param("id") id: string,
    @Body() body: UpdateTuitDto
  ): Tuit | string {
    try {
      return this.tuitService.update(parseInt(id), body);
    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return "Recurso no encontrado";
      }
    }
  }

  @Delete(":id")
  deleteTuit(@Param("id") id: string): Tuit | string {
    try {
      return this.tuitService.delete(parseInt(id));
    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return "Recurso no encontrado";
      }
    }
  }
}
