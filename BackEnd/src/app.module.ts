import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import {DatabaseModule} from "./database/database.module";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    DatabaseModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],//AppController
  providers: [AppService],
})
export class AppModule {}
