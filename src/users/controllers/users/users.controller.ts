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
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dtos/userDto/createUser.dto';
import { FilterUser } from 'src/dtos/userDto/filter-user.dto';
import { UpdateUserDto } from 'src/dtos/userDto/update-user.dto';
import { User } from 'src/entities';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@ApiTags('users')
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

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, userDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<string> {
    return this.usersService.deleteUser(id);
  }
}
