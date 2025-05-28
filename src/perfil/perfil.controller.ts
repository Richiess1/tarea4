// src/perfil/perfil.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('perfil')
export class PerfilController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getPerfil(@Req() req: Request) {
    const user = req.user;
    return {
      mensaje: `Bienvenido a tu perfil, ${user.email}`,
      datos: user,
    };
  }
}
