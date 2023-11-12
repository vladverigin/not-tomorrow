import {Inject, Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
      @Inject('USER_REPOSITORY')
      private userRepository: Repository<User>,
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const payload = new User()
    payload.password = password;
    payload.email = createUserDto.email;
    payload.firstname = createUserDto.firstname;
    payload.lastname = createUserDto.lastname;
    return await this.userRepository.save(payload);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email:email,
      },
    });
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
