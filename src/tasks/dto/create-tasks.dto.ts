import { ApiProperty } from "@nestjs/swagger";

export class CreateTasksDto{
    @ApiProperty({ example: 'Tarea 2 de Base de Datos', description: 'Crea un diagrama de Base de Datos Relacional',  })
    titulo: string;

    //TRUE = TAREA COMPLETADA
    //FALSE = TAREA INCOMPLETA
    @ApiProperty({ example: false, description: 'Tarea incompleta' })
    completed: boolean;

    @ApiProperty({ example: 2, description: 'ID del usuario al que pertenece la tarea' })
    userId: number;
}