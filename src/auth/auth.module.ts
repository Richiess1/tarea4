// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    PassportModule,                                   // provee AuthGuard
    JwtModule.register({                              // configura JWT
      secret: process.env.JWT_SECRET || 'tu_secreto', // tu clave aquí o en .env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtStrategy, JwtAuthGuard],             // registra estrategia y guard
  exports: [JwtAuthGuard],                            // permite usarlo fuera de auth.module
})
export class AuthModule {}
