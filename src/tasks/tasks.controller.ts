import { Controller, Post, Get, Param, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) //protege el controllador, pide un TOKEN
@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    @ApiOperation({ summary: 'Crear una tarea' })
    @ApiResponse({ status: 201, description: 'Tarea creada correctamente' })
    create(@Body() dto: CreateTasksDto): Promise<Task> {
        return this.tasksService.createTask(dto.titulo, dto.userId);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las tareas' })
    @ApiResponse({ status:201, description: 'Lista de tareas' })
    findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una tarea por ID' })
    @ApiParam({ name: 'id', description: 'ID de la Tarea' })
    @ApiResponse({ status: 200, description: 'Tarea encontrada' })
    @ApiResponse({ status: 404, description: 'Tarea no encomntrada' })
    findById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findById(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar tarea por ID' })
    @ApiParam({ name:'id', description:'ID de la Tarea' })
    update(
        @Param('id') id: string, 
        @Body() body: Partial<Task>
    ): Promise<Task> {
        return this.tasksService.updateTask(+id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar tarea por ID' })
    @ApiParam({ name:'id', description: 'ID de la Tarea' })
    delete(@Param('id') id: string): Promise<void> {
        return this.tasksService.deleteTask(+id);
    }
}
