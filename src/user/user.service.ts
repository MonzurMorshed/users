import { Injectable } from '@nestjs/common';
import { User } from './user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
        
    }

    async save(options){
        return this.userRepository.save(options);
    }

    async find(options = {}){
        return this.userRepository.find();
    }

    async findOne(options){
        const user = await this.userRepository.findOne(
            { 
                where:options
            }
        );
        return user ;
    }

    async update(id: number,options){
        return this.userRepository.update(id,options);
    }
}
