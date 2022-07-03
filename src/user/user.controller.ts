import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Get()
    async all(){
        return this.userService.find();
    }
}
