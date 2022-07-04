import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
    constructor(private userService: UserService){

    }

    @Get()
    async all(){
        return this.userService.find();
    }
}
