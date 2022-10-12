import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TuitsModule } from "./modules/tuits/tuits.module";

@Module({
  imports: [
    TuitsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "tuiter",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
