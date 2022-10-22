import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log(
      "Previous to the handler controller to the endpoint: " + req.originalUrl
    );
    next();
  }
}
