import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class AuthService { //NO TOCAR
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService) {}

  //NO TOCAR//
  async validateUser( email: string, password: string): Promise<any> {

    const user = await this.usersRepository.findOneBy({email})
    if (!user) throw new NotFoundException('Usuario no encontrado')

    const passportValidate = await bcrypt.compare(password, user.password )
    if(!passportValidate) {
      throw new UnauthorizedException('Contrasenia incorrecta')
    }

    return { id: user.id, name:user.name ,email: user.email }

  }

  //NO TOCAR
  login(user: any) {
    const payload = { name:user.name, email:user.email, sub:user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


