import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToMany(type => Product, product => product.store)
    products: Product[];
}
