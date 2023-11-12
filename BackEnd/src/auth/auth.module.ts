import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import {AuthGuard} from "./auth.guard";
import {APP_GUARD} from "@nestjs/core";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [
      AuthService,
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}