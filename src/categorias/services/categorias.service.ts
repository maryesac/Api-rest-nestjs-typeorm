import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria) private categoriasRepo: Repository<Categoria>,
  ) {}

  findAll() {
    return this.categoriasRepo.find();
  }

  findOne(id: number) {
    return this.categoriasRepo.findOne(id);
  }

  create(body: any) {
    const newCategoria = new Categoria();
    newCategoria.nombre = body.nombre;
    return this.categoriasRepo.save(newCategoria);
  }

  async update(id: number, body: any) {
    const categoria = await this.categoriasRepo.findOne(id);
    this.categoriasRepo.merge(categoria, body);
    return this.categoriasRepo.save(categoria);
  }

  async remove(id: number) {
    await this.categoriasRepo.delete(id);
    return true;
  }
}
