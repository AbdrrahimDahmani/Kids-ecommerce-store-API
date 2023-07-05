import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dtos/createUser.dto';
import { FilterUser } from 'src/dtos/filter-user.dto';
import { User } from 'src/entities';
import { UserRepository } from 'src/repositories';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  async getAllUsers(filterUser: FilterUser): Promise<User[]> {
    const { search, email } = filterUser;
    const query = this.userRepo.createQueryBuilder('user');

    if (search)
      query.andWhere('user.nom LIKE :search or user.prenom LIKE :search', {
        search: `%${search}%`,
      });

    if (email)
      query.andWhere('user.email Like :email', { email: `%${email}%` });

    const users = await query.getMany();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepo.getUserById(id);
  }

  async createUser(userDto: UserDto): Promise<User> {
    return this.userRepo.createUser(userDto);
  }

  async updateUser(id: string, userDto: UserDto): Promise<User> {
    return this.userRepo.updateUser(id, userDto);
  }

  async deleteUser(id: string): Promise<string> {
    return this.userRepo.deleteUser(id);
  }
}
