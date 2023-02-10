import { FeedService } from './../../services/feed.service';
import { Controller } from '@nestjs/common';
import { Post, Get, Patch, Delete } from '@nestjs/common';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService:FeedService
    ) {}

    @Post()
    create(){
        return this.feedService.createPost;
    }
}
