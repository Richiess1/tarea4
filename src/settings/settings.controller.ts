// src/settings/settings.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Req() req: any) {
    return {
      mensaje: `Bienvenido a tu configuración, ${req.user.name}`,
      email: req.user.email,
    };
  }
}
