// src/settings/settings.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('settings')
export class SettingsController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Req() req) {
    const user = req.user as any;
    return {
      mensaje: `Bienvenido a tu configuración, ${user.name}`,
      email: user.email,
    };
  }
}
