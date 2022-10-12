import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../user/user.entity";
@Entity({ name: "tuits" })
export class Tuit {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  message: string;

  @Column({ name: "user_id" })
  userId: number;

  @ManyToOne((_) => User, (user) => user.tuits, { cascade: true })
  @JoinColumn({ name: "user_id" })
  user?: User;
}
