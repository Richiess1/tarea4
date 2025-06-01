import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    async createProducto(createProductoDto: CreateProductoDto): Promise<Producto>{
        //consulta la BD si existe un cliente con el mismo correo
        const existente = await this.productoRepository.findOneBy({
            nombre: createProductoDto.nombre,
        });
        if (existente) {
            throw new ConflictException('El producto ya está registrado');
        }
        const nuevoProducto = this.productoRepository.create(createProductoDto);
        return this.productoRepository.save(nuevoProducto);
    }

    async findAll(): Promise<Producto[]>{
        return this.productoRepository.find()
    }

    async deleteProducto(id: number): Promise<void> {
        const result = await this.productoRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Producto con ${id} no encontrado`);
        }
    }
    //id, nombre, precio y stock.
    //Validar que el nombre no sea vacío
    //El precio sea mayor a 0
    //El stock sea un número entero positivo.
}
