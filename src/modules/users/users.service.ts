import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor (private prisma:PrismaService){ }
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data:{
        nom:createUserDto.nom,
        prenom:createUserDto.prenom,
        mail:createUserDto.mail,
        dateNaissance:new Date(createUserDto.dateNaissance),
        postId:createUserDto.postId

      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {id}    
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where:{id},
      data:{
        nom:updateUserDto.nom,
        prenom:updateUserDto.prenom,
        mail:updateUserDto.mail,
        dateNaissance:new Date(updateUserDto.dateNaissance),
        postId:updateUserDto.postId
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where:{id}
    });
  }
}
