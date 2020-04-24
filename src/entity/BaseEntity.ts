import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, BeforeRemove } from "typeorm";

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publicId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}