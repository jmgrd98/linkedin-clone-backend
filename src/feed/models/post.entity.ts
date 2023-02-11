import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity('post')
export class FeedPostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    body: string;

    @CreateDateColumn()
    createdAt: Date;

    
}