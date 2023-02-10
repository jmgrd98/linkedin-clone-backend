import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed/feed.controller';
import { PostEntity } from './models/post.entity';
@Module({
  providers: [FeedService],
  controllers: [FeedController],
  imports: [TypeOrmModule.forFeature([PostEntity])]
})
export class FeedModule {}
