import { Entity, Column, ManyToOne } from "typeorm";
import { Store } from './Store'
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Product extends BaseEntity {

    @Column()
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(type => Store, store => store.products)
    store: Store;
}
