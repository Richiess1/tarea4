// src/app.module.ts
import { Module } from '@nestjs/common';
import { SettingsController } from './settings/settings.controller';
import { AuthModule } from './auth/auth.module';  // importamos el módulo de auth

@Module({
  imports: [
    AuthModule,          // ahora SettingsController podrá usar JwtAuthGuard
  ],
  controllers: [
    SettingsController,  // tu controller /settings
  ],
  providers: [],
})
export class AppModule { }
