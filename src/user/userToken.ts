import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    expire_at: Date;
}