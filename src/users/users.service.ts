import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }
    
    //NO TOCAR, NADA, NADA//
    async createUser( dto: CreateUserDto): Promise<User> {
        const correoExistente = await this.usersRepository.findOneBy({email: dto.email})
        if (correoExistente) {
            throw new UnauthorizedException('El correo ya está registrado');
        } else {
            const newUser = this.usersRepository.create(dto);
            return this.usersRepository.save(newUser);
        }

    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findById(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async updateUser(id: number, data: Partial<User>): Promise<User> {
        const user = await this.findById(id);
        Object.assign(user, data);
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number): Promise<void> {
        const result = await this.usersRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
    }
}
