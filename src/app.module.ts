import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';

@Module({
  imports: [],
  controllers: [AppController, SettingsController],
  providers: [AppService, SettingsService],
})
export class AppModule {}
