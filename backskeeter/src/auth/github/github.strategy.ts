import { UsersService } from './../../users/users.service';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Profile, Strategy } from 'passport-github';
import { AppConfig } from 'src/config/interfaces';

@Injectable()
export class GithubOauthStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private configService: ConfigService<AppConfig>,
    private usersService: UsersService,
  ) {
    super({
      clientID: configService.get<string>('auth.github.clientId'),
      clientSecret: configService.get<string>('auth.github.clientSecret'),
      callbackURL: configService.get<string>('auth.github.callbackURL'),
      scope: ['public_profile'],
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    const { id } = profile;
    // const user = await this.usersService.findOrCreate(id, 'github', profile);

    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return true;
  }
}
