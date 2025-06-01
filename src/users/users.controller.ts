import { Controller, Post, Get, Param, Body, Put, Delete, Req, Res, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) //protege el controllador, pide un TOKEN
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post() //NO TOCAR ESTE, NADA//
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado correctamente.' })
    create(@Body() dto: CreateUserDto):Promise<User> {
        return this.usersService.createUser(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 201, description: 'Lista de usuarios' })
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un usuario por ID' })
    @ApiParam({ name: 'id', description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado' })
    @ApiResponse({ status: 404 , description: 'Usuario no encontrado'})
    findById(@Param('id') id: string): Promise<User> {
        return this.usersService.findById(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar usuario por ID' })
    @ApiParam({ name:'id', description:'ID del usuario' })
    update(
        @Param('id') id: string, 
        @Body() body: Partial<User>
    ): Promise<User> {
        return this.usersService.updateUser(+id, body);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard) //protege la ruta
    @ApiOperation({ summary: 'Eliminar usuario por ID' })
    @ApiParam({ name:'id', description: 'ID del usuario' })
    async delete(@Param('id') id: string, @Req() req: any, @Res() res: any): Promise<void> {
        const email = req.user.email; //busca el correo del usuario
        const userId = await this.usersService.findById(+id); //obtiene el id del usuario del token
        
        if(userId.email !== email){
            return res.status (403).json({ message: 'Acción no permitida, solo información propia'});
        }
        await this.usersService.deleteUser(+id);
        return res.status(204).send();
    }

}