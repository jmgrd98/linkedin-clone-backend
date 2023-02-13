import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../models/user.interface';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @Post('register')
    register(@Body() user: User): Observable<User> {
        return this.authService.registerAccount(user);
    }

    @Post('login')
    login(@Body() user: User): Observable<{ token: string }> {
        return this.authService.login(user).pipe(map((jwt:string) => ({token:jwt})));
    }
}
