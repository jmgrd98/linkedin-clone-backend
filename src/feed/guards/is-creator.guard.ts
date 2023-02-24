import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { FeedService } from '../services/feed.service';
import { User } from '../../auth/models/user.interface';

@Injectable()
export class IsCreatorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private feedService: FeedService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { user, params }: { user: User; params: { id: number } } = request;
    if (!user || !params) return false;
    if (user.role === 'admin') return true;
    const userId = user.id;
    const feedId = params.id;
  }
}
