import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import { MoreThanOrEqual } from "typeorm";
import { TokenService } from "./token.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private tokenService: TokenService) {
    }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        try {
            const jwt = request.cookies['jwt'];
            const {id} = await this.jwtService.verify(jwt);

            const userToken = await this.tokenService.findOne({
                user_id: id,
                expired_at: MoreThanOrEqual(new Date())
            });

            if(!userToken) return false;

            return true;

            // const is_ambassador = request.path.toString().indexOf('api/ambassador') >= 0;

            // return is_ambassador && scope === 'ambassador' || !is_ambassador && scope === 'admin';
        } catch (e) {
            return false;
        }
    }
}
