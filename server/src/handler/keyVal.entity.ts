import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class KeyVal {
  @PrimaryColumn()
  key: string;

  @Column()
  value: string;
}
