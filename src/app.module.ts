// src/app.module.ts
import { Module } from '@nestjs/common';
import { SettingsController } from './settings/settings.controller';
import { AuthModule } from './auth/auth.module';  // importamos el módulo de auth
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'astri',
        database: 'tarea4',
        entities: [User, Task],
        synchronize: true,
    }),
    UsersModule, 
    TasksModule,
    AuthModule
  ],
  controllers: [SettingsController],
  providers: [AppService],
})
export class AppModule { }
