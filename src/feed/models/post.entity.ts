import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('post')
export class FeedPostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    body: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}