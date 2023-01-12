export interface AppConfig {
  port: number;

  auth: {
    jwt: {
      secret: string;
      expiresInSeconds: number;
    };
    github: {
      clientId: string;
      clientSecret: string;
      callbackURL: string;
    };
  };
  'auth.jwt.secret'?: string;
  'auth.jwt.expiresInSeconds'?: string;
  'auth.github.clientId'?: string;
  'auth.github.clientSecret'?: string;
  'auth.github.callbackURL'?: string;
}
