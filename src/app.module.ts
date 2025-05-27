import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsController } from './settings/settings.controller';

@Module({
  imports: [],
  controllers: [AppController, SettingsController],
  providers: [AppService],
})
export class AppModule {}
