import { UpdateResult, DeleteResult } from 'typeorm';
import { Observable } from 'rxjs';
import { FeedPost } from './../../models/post.interface';
import { FeedService } from './../../services/feed.service';
import { Post, Get, Patch, Put, Delete, Controller, Body } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
@Controller('feed')
export class FeedController {
    constructor(
        private feedService:FeedService
    ) {}

    @Post()
    create(@Body() feedPost:FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(feedPost);
    }

    @Get()
    getAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts();
    }

    @Get()
    get(){

    }

    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() feedPost: FeedPost): Observable<UpdateResult>{
        return this.feedService.updatePost(id, feedPost);
    }

    @Delete(':id')
    delete(@Param('id') id:number,): Observable<DeleteResult>{
        return this.feedService.deletePost(id);
    }
}
