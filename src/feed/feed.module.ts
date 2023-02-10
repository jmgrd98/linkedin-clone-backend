import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed/feed.controller';

@Module({
  providers: [FeedService],
  controllers: [FeedController],
  imports: []
})
export class FeedModule {}
