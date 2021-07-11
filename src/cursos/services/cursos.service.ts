import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './../entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(@InjectRepository(Curso) private cursosRepo: Repository<Curso>) {}

  findAll() {
    return this.cursosRepo.find();
  }

  findOne(id: number) {
    return this.cursosRepo.findOne(id);
  }

  create(body: any) {
    const newCurso = new Curso();
    newCurso.nombre = body.nombre;
    newCurso.duracion = body.duracion;
    newCurso.docente = body.docente;
    newCurso.cursoID = body.cursoID;
    return this.cursosRepo.save(newCurso);
  }

  async update(id: number, body: any) {
    const usuario = await this.cursosRepo.findOne(id);
    this.cursosRepo.merge(usuario, body);
    return this.cursosRepo.save(usuario);
  }

  async remove(id: number) {
    await this.cursosRepo.delete(id);
    return true;
  }
}
