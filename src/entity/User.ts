import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Store } from "./Store";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    actived: boolean

    @OneToMany(type => Store, store => store.user)
    stores: Store[];
}
