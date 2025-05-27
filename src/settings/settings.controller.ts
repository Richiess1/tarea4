// src/settings/settings.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserRequest } from '../types/user-request.interface';

@Controller('settings')
export class SettingsController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Req() req: UserRequest) {
    const user = req.user;
    return {
      mensaje: `Bienvenido a tu configuración, ${user.name}`,
      email: user.email,
    };
  }
}
