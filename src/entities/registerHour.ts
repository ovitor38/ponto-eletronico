import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "./Users";

@Entity()
export class RegisterOfficeHour extends BaseEntity {
  @PrimaryGeneratedColumn()
  register_id: string;

  @Column()
  user_id: string;

  @Column()
  checkIn: Date;

  @Column({ nullable: true })
  lunchIn: Date;

  @Column({ nullable: true })
  lunchOut: Date;

  @Column({ nullable: true })
  checkOut: Date;

  @ManyToOne(() => Users, (user) => user.register, {
    cascade: ["remove"],
  })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
