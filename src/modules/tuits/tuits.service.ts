import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTuitDto, UpdateTuitDto } from "./dto";
import { Tuit } from "./tuits.entity";

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: 1,
      message: "Hola mundo",
    },
  ];

  getAll() {
    return this.tuits;
  }

  getOne(id: number) {
    const tuit: Tuit = this.tuits.find((item) => item.id === id);
    return tuit;
  }

  update(id: number, payload: UpdateTuitDto): Tuit {
    const index: number = this.tuits.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException("Resource not found");
    }
    this.tuits[index] = { id, ...payload };

    return this.tuits[index];
  }

  delete(id: number): Tuit {
    const tuit: Tuit = this.tuits.find((item) => item.id === id);
    if (!tuit) {
      throw new NotFoundException("Resource not found");
    }
    this.tuits = this.tuits.filter((item) => item.id !== id);
    return tuit;
  }

  create(payload: CreateTuitDto): Tuit {
    const id: number = this.tuits[this.tuits.length - 1].id + 1;
    const toCreateTuitPayload: Tuit = {
      ...payload,
      id,
    };

    this.tuits = [...this.tuits, toCreateTuitPayload];
    return toCreateTuitPayload;
  }
}
