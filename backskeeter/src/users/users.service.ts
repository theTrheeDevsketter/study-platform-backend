import { Profile } from 'passport-github';
import { Injectable } from '@nestjs/common';

import { AuthProvider, User } from '../shared';

@Injectable()
export class UsersService {
  async findOrCreate(
    userId: string,
    provider: AuthProvider,
    profile: Profile,
  ): Promise<User> {
    // En este objeto viajan todos los datos del usuario. De aquí podemos sacar imagen, url, link de seguimiento, ...
    console.log(profile);

    return {
      id: profile._json.id, // ID que viene de nuestra base de datos
      provider,
      providerId: profile._json.id,
      displayName: profile._json.name,
      photos: profile.photos,
    };

    // return this.users.find(user => user.displayName === username);
  }
}
