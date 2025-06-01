import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsNumber, Min, IsString, Matches } from "class-validator";
    //id, nombre, precio y stock.
    //Validar que el nombre no sea vacío
    //El precio sea mayor a 0
    //El stock sea un número entero positivo.

export class CreateProductoDto {
    @ApiProperty({ example: 'Botella de plastico', description: 'Nombre del producto' })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: 'El nombre debe ser texto' })
    nombre: string

    @ApiProperty({ example: 3.5, description: "Precio del producto" })
    @IsNumber({}, { message: 'El precio debe ser un número' })
    @IsPositive({ message: 'El precio debe ser un número positivo' })
    @Min(0.01, { message: 'El monto debe ser mayor a cero' })
    precio: number

    @ApiProperty({ example: 11, description: 'Cantidad disponible' })
    @IsInt({ message: 'El stock debe ser un número entero' })
    @IsPositive({ message: 'El stock debe ser un número positivo' })
    stock: number
}
