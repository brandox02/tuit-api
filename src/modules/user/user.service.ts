import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

type FindParam = {
  perParge?: number;
  page: number;
};

type FindOneParam = {
  id?: number;
  username?: string;
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>
  ) {}

  async findOne(where: FindOneParam): Promise<User | null> {
    return await this.repo.findOne({ where });
  }

  async find({ page, perParge = 12 }: FindParam): Promise<User[]> {
    return await this.repo.find({ take: perParge, skip: page });
  }
}
