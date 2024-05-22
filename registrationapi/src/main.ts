import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Customer API')
      .setDescription('The CustomerAPI description')
      .setVersion('1.0')
      .addTag('customers')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  //http://localhost:3000/api
  SwaggerModule.setup('/rest', app, document);

  await app.listen(3000);
}
bootstrap();
