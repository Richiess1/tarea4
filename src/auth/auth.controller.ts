import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
 
  //NO TOCAR//
  @Post('login')
  @ApiResponse({ status: 401, description: 'Correo o contrasenia incorrectos' })
  @ApiResponse({ status: 200, description: 'Login exitoso' })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }
}
