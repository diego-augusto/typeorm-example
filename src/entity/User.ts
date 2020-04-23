import { Entity, Column, OneToMany } from "typeorm";
import { Store } from "./Store";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string

    @OneToMany(type => Store, store => store.user)
    stores: Store[];
}
