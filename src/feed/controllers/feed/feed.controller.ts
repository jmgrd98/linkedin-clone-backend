import { JwtGuard } from './../../../auth/guards/jwt.guard';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Observable } from 'rxjs';
import { FeedPost } from './../../models/post.interface';
import { FeedService } from './../../services/feed.service';
import {
  Post,
  Get,
  Patch,
  Put,
  Delete,
  Controller,
  Body,
  Query,
  Request
} from "@nestjs/common";
import { Param, UseGuards } from "@nestjs/common/decorators";
import { Roles } from "../../../auth/decorators/roles.decorator";
import { Role } from "../../../auth/models/role.enum";

@Controller("feed")
export class FeedController {
  constructor(private feedService: FeedService) {
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() feedPost: FeedPost, @Request() req): Observable<FeedPost> {
    return this.feedService.createPost(req.user, feedPost);
  }

  @Get()
  getAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }

  @Get()
  findSelected(
    @Query('take') take = 1,
    @Query('skip') skip = 1,
  ): Observable<FeedPost[]> {
    take = take > 20 ? 20 : take;
    return this.feedService.findPosts(take, skip);
  }

  @Get()
  get() {}

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
