import { GithubOauthStrategy } from './github.strategy';
import { GithubOauthController } from './github.controller';
import { UsersModule } from './../../users/users.module';
import { JwtAuthModule } from './../jwt/jwt.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [JwtAuthModule, UsersModule],
  controllers: [GithubOauthController],
  providers: [GithubOauthStrategy]
})
export class GithubModule {}
