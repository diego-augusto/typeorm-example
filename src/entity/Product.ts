import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Store } from './Store'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(type => Store, store => store.products)
    store: Store;
}
