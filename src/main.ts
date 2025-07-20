import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as nodeCrypto from 'crypto';
import { randomUUID } from 'crypto';


async function bootstrap() {
  if (!globalThis.crypto) {
    globalThis.crypto = {
      randomUUID,
    } as any;
  }
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors({
    origin: config.get('CORS_ORIGIN'),
    credentials: true,
  });

  const port = config.get<number>('APP_PORT') || 3000;
  await app.listen(port);
  console.log(`🚀 App running on http://localhost:${port}`);
}
bootstrap();
