import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { TasksModule } from 'src/tasks/tasks.module';

//NO TOCAR
@Module({
  imports: [
    UsersModule,
    TasksModule,
    JwtModule.register({
      secret: 'clave_secreta',
      signOptions: { expiresIn: '1h' },
    }),
  ], 
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
