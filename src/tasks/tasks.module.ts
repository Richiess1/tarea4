import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from 'src/users/user.entity';
import { UsersModule } from 'src/users/users.module';
import { PerfilController } from 'src/perfil/perfil.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task, User]),
        UsersModule
    ],
    controllers: [TasksController, PerfilController],
    providers: [TasksService]
})
export class TasksModule { }
