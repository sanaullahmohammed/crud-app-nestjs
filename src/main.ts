import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NestFactory.create() method creates a new Nest application instance is created
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
