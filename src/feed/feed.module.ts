import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed/feed.controller';
import { FeedPostEntity } from './models/post.entity';
@Module({
  providers: [FeedService],
  controllers: [FeedController],
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],
})
export class FeedModule {}
