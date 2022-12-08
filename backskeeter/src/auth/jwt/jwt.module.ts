import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AppConfig } from "src/config/interfaces";
import { JwtAuthService } from "./jwt.service";
import { JwtStrategy } from "./jwt.strategy";


@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService<AppConfig>) => ({
                secret: configService.get<string>('auth.jwt.secret'),
                signOptions: { expiresIn: configService.get<number>('auth.jwt.expiresInSeconds')},
            }),
            inject: [ConfigService],
        })
    ],
    providers: [JwtStrategy, JwtAuthService],
    exports: [JwtAuthService]
})
export class JwtAuthModule {}