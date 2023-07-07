import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dtos/userDto/createUser.dto';
import { FilterUser } from 'src/dtos/userDto/filter-user.dto';
import { UpdateUserDto } from 'src/dtos/userDto/update-user.dto';
import { User } from 'src/entities';
import { UserRepository } from 'src/repositories';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  async getAllUsers(filterUser: FilterUser): Promise<User[]> {
    return await this.userRepo.getAllUsers(filterUser);
  }

  async getUserById(id: string): Promise<User> {
    return await this.userRepo.getUserById(id);
  }

  async createUser(userDto: UserDto): Promise<User> {
    return await this.userRepo.createUser(userDto);
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    return await this.userRepo.updateUser(id, userDto);
  }

  async deleteUser(id: string): Promise<string> {
    return await this.userRepo.deleteUser(id);
  }
}
