// src/settings/settings.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('settings')
export class SettingsController {
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Req() req: Request) {
    const user = req.user as any; // O usa tu interfaz específica si la tienes

    return {
      mensaje: `Bienvenido a tu configuración, ${user.name}`,
      email: user.email,
    };
  }
}
