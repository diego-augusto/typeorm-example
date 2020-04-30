import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, BeforeRemove, Generated } from "typeorm";

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type : "uuid"})
    @Generated("uuid")
    publicId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}