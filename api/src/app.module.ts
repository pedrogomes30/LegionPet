import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const { DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@mongo:${DB_PORT}/?tls=false`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
