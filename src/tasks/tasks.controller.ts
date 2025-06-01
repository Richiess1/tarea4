import { Controller, Post, Get, Param, Body, Put, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) //protege el controllador, pide un TOKEN
@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    @ApiOperation({ summary: 'Crear una tarea' })
    @ApiResponse({ status: 201, description: 'Tarea creada correctamente' })
    async create(@Body() dto: { titulo: string }, @Req() req:any): Promise<Task> {
        const userId = req.user.userId;
        const tarea = await this.tasksService.createTask(dto.titulo, userId);
        if (tarea.user && 'password' in tarea.user) {
            delete (tarea.user as any).password;
        }
        return tarea;
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
    async delete(@Param('id') id: string, @Req() req:any, @Res() res:any): Promise<void> {
        const tarea = await this.tasksService.findById(+id);
        if (!tarea) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        if (!tarea.user || tarea.user.id !== req.user.userId) {
            return res.status(403).json({ message: 'Acción no permitida: solo puedes eliminar tus propias tareas.' });
        }
        await this.tasksService.deleteTask(+id);
        return res.status(204).send();
    }
}
