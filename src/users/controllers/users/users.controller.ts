import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Query,
  Delete,
} from '@nestjs/common';
import { UserDto } from 'src/dtos/createUser.dto';
import { FilterUser } from 'src/dtos/filter-user.dto';
import { User } from 'src/entities';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAllUsers(@Query() filterUser: FilterUser): Promise<User[]> {
    return this.usersService.getAllUsers(filterUser);
  }

  @Get('/:id')
  findUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Patch('/:id/update')
  updateUser(@Param('id') id: string, @Body() userDto: UserDto): Promise<User> {
    return this.usersService.updateUser(id, userDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<string> {
    return this.usersService.deleteUser(id);
  }
}
