import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from 'src/dtos/createUser.dto';
import { User } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async createUser(userDto: UserDto): Promise<User> {
    const { nom, prenom, tel, adresse, ville, email } = userDto;
    const newUser = this.create({
      nom,
      prenom,
      tel,
      adresse,
      ville,
      email,
    });
    try {
      return await this.save(newUser);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Mail already exists');
      else throw new InternalServerErrorException();
    }
  }
  async updateUser(id: string, userDto: UserDto): Promise<User> {
    const { nom, prenom, tel, adresse, ville, email } = userDto;
    const user = await this.getUserById(id);
    if (nom) user.nom = nom;
    if (prenom) user.prenom = prenom;
    if (tel) user.tel = tel;
    if (adresse) user.adresse = adresse;
    if (ville) user.ville = ville;
    if (email) user.email = email;
    return await this.save(user);
  }
  async deleteUser(id: string): Promise<string> {
    const user = await this.getUserById(id);
    if (await this.remove(user)) return `User with id: ${id} was removed`;
  }
}
