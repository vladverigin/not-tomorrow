import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {userProviders} from "./users.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [],
  providers: [
    UsersService,
      ...userProviders
  ],
  exports: [UsersService]
})
export class UsersModule {}
