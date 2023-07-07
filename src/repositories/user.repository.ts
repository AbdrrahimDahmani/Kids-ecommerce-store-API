import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from 'src/dtos/userDto/createUser.dto';
import { FilterUser } from 'src/dtos/userDto/filter-user.dto';
import { UpdateUserDto } from 'src/dtos/userDto/update-user.dto';
import { User } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async getAllUsers(filterUser: FilterUser): Promise<User[]> {
    const { search, email } = filterUser;
    const query = this.createQueryBuilder('user');

    if (search)
      query.andWhere(
        'Lower(user.nom) LIKE :search or Lower(user.prenom) LIKE :search',
        {
          search: `%${search.toLowerCase()}%`,
        },
      );

    if (email)
      query.andWhere('user.email Like :email', { email: `%${email}%` });

    const users = await query.getMany();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException('Utilisateur not found');
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
    return await this.save(newUser);
  }
  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
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
    if (await this.remove(user))
      return `Utilisateur aved l'id: ${id} est supprimé`;
  }
}
