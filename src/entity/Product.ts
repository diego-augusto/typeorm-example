import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, RelationId } from "typeorm";
import { Store } from './Store'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(type => Store, store => store.products)
    store: Store;
}
