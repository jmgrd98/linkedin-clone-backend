import { Observable } from 'rxjs';
import { FeedPost } from './../../models/post.interface';
import { FeedService } from './../../services/feed.service';
import { Post, Get, Patch, Delete, Controller, Body } from '@nestjs/common';
@Controller('feed')
export class FeedController {
    constructor(
        private feedService:FeedService
    ) {}

    @Post()
    create(@Body() post:FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post);
    }

    @Get()
    getAll(){
        // return this.feedService
    }

    @Get()
    get(){

    }

    @Patch()
    update(){

    }

    @Delete()
    delete(){

    }
}
