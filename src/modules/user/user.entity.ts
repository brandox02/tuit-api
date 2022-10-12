import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { Tuit } from "../tuits/tuits.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @OneToMany((_) => Tuit, (tuit) => tuit.user)
  tuits?: Tuit[];
}
