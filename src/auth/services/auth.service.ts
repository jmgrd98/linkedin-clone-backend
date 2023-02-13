import { UserEntity } from './../models/user.entity';
import { User } from './../models/user.interface';
import { Observable, from } from 'rxjs';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
        ) {}

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User, ): Observable<User>{
        const { firstName, lastName, email, password } = user;
        return this.hashPassword(password).pipe(
            switchMap((hashedPassword:string) => {
                return from(this.userRepository.save({}));
            }),
        );
    }

    function switchMap(
        arg0: (hashedPassword:string) => void,
    ): import ('rxjs').OperatorFunction<string, User> {
        throw new Error('Function not implemented.');
    }

}
