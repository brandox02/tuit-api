import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Tuit } from "./tuits.entity";
import { CreateTuitDto, UpdateTuitDto } from "./dto";
import { PaginationDto } from "./dto/pagination.dto";

@Injectable()
export class TuitsService {
  constructor(
    @InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>
  ) {}

  async getAll({ limit, offset }: PaginationDto): Promise<Tuit[]> {
    return await this.tuitRepository.find({
      relations: { user: true },
      skip: offset,
      take: limit,
      order: {
        id: "ASC",
      },
    });
  }

  async getOne(id: number): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOne({
      where: { id },
      relations: { user: true },
    });
    if (tuit) {
      return tuit;
    }
    throw new NotFoundException("Resource not found");
  }

  async update(id: number, payload: UpdateTuitDto): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOne({ where: { id } });
    if (!tuit) {
      throw new NotFoundException("Resource not found");
    }

    await this.tuitRepository.update({ id }, payload);

    const response: Tuit = await this.tuitRepository.findOne({
      where: { id },
      relations: { user: true },
    });
    return response;
  }

  async delete(id: number): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOne({ where: { id } });

    if (!tuit) {
      throw new NotFoundException("Resource not found");
    }
    await this.tuitRepository.remove(tuit);

    return tuit;
  }

  async create(payload: CreateTuitDto): Promise<Tuit> {
    const tuitCreated = this.tuitRepository.create(payload);

    await this.tuitRepository.save(tuitCreated);

    return tuitCreated;
  }
}
