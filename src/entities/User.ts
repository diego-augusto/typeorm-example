import { Entity, Column, OneToMany, BeforeInsert } from "typeorm";
import { hash, genSalt } from "bcryptjs";
import { Store } from "./Store";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ select : false})
    password: string

    @OneToMany(type => Store, store => store.user)
    stores: Store[];

    @BeforeInsert()
    async hashPassword() {
        const salt = await genSalt(10);
        this.password = await hash(this.password, salt)
    }

}
