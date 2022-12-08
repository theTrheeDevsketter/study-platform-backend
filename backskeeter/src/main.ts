import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';




const configModule = ConfigService;



async function bootstrap() {



  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT) || 8080);
}
bootstrap();
