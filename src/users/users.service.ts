import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const exists = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (exists) throw new BadRequestException('Email already registered');

    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        middleName: dto.middleName,
        lastName1: dto.lastName1,
        lastName2: dto.lastName2,
        email: dto.email,
        password: hash,
        roleId: dto.roleId,
      },
      select: { id: true, firstName: true, lastName1: true, email: true, roleId: true, createdAt: true },
    });
    return user;
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { id: true, firstName: true, lastName1: true, email: true, roleId: true, createdAt: true },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, firstName: true, lastName1: true, email: true, roleId: true, createdAt: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    if (dto.password) dto.password = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: dto as any,
        select: { id: true, firstName: true, lastName1: true, email: true, roleId: true, updatedAt: true },
      });
      return user;
    } catch {
      throw new NotFoundException('User not found');
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return { ok: true };
    } catch {
      throw new NotFoundException('User not found');
    }
  }
}
