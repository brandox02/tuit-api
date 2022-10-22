import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerMiddleware } from "./logger.middleware";
import { TuitsController } from "./tuits.controller";
import { Tuit } from "./tuits.entity";
import { TuitsService } from "./tuits.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("tuits");
  }
}
