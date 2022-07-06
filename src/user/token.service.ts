import { UserToken } from './userToken';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';


@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(UserToken) private readonly tokenRepository: Repository<UserToken>
    ){}

    async save(options){
        return this.tokenRepository.save(options);
    }   

    async findOne(options){
        console.log(options);
        const user = await this.tokenRepository.findOne({where:options});
        console.log(user);
        return user ;
    }
    
    async delete(options){
        return this.tokenRepository.delete(options);
    }

}