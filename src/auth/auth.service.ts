import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result; // aquí ya trae el role por la relación cargada
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id_user, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user, // incluye el role porque ya viene con la relación
    };
  }
}
