import { Post } from './../models/post.interface';
import { Injectable } from '@nestjs/common';
import { PostEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly PostRepository: Repository<PostEntity>
    ) {}

    createPost(post:Post) {
        return this.PostRepository.save(post);
    }
}
