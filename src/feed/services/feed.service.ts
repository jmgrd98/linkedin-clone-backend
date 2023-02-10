import { FeedPost } from './../models/post.interface';
import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../models/post.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) {}

    createPost(feedPost:FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feedPost));
    }

    findAllPosts(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }

    findPost(id: number) {
        // return from(this.feedPostRepository)
    }

    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
        return from(this.feedPostRepository.update(id, feedPost));
    }
}
