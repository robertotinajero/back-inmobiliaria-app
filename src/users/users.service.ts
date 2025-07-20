import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }


  async create(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ email, password: hash });
    return this.userRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      relations: ['role', 'department'],
    });
  }

  async findAllWithRelations(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['role', 'department'],
    });
  }
}
