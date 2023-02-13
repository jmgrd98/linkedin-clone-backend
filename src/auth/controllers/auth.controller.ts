import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../models/user.interface';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @Post('register')
    register(@Body() user: User): Observable<User> {
        return this.authService.registerAccount();
    }
}
