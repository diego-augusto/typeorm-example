import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, RelationId } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.stores)
    user: User;

    @OneToMany(type => Product, product => product.store)
    products: Product[];
}
