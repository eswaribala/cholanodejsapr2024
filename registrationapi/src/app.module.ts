import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/customernestdb'), CustomerModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
