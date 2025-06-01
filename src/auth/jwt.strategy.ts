// src/auth/jwt.strategy.ts
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable() //NO TOCAR
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'clave_secreta',
        });
    }
    
    //NO TOCAR
    async validate(payload: any) {
        return { name: payload.name, userId: payload.sub, email: payload.email }; 
    }
}
