import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TuitsController } from "./tuits.controller";
import { Tuit } from "./tuits.entity";
import { TuitsService } from "./tuits.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
