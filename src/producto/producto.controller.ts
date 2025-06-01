import { Body, Controller, Post, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './producto.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoServicio: ProductoService){}

    //ruta privada
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() CreateProductoDto: CreateProductoDto): Promise<Producto>{
        return this.productoServicio.createProducto(CreateProductoDto);
    }

    //ruta publica
    @Get()
    finAll(): Promise<Producto[]>{
        return this.productoServicio.findAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.productoServicio.deleteProducto(+id);
    }
}
