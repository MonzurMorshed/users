import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService){

    }

    @Get()
    async all(){
        return this.UserService.find();
    }
}
