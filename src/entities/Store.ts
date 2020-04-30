import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Store extends BaseEntity {

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.stores)
    user: User;

    @OneToMany(type => Product, product => product.store)
    products: Product[];
}
