import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      const user = await this.authService.validateUser(body.email, body.password);
      console.log(user);
      return this.authService.login(user);
    } catch (error) {
      console.error('Error en login:', error);
      throw error; // NestJS manejará el UnauthorizedException adecuadamente
    }
  }

  // @Post('register')
  // register(@Body() body: { email: string; password: string }) {
  //   return this.authService.register(body.email, body.password);
  // }
}

