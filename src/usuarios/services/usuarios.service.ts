import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './../entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuariosRepo.find();
  }

  findOne(id: number) {
    return this.usuariosRepo.findOne(id);
  }

  create(body: any) {
    const newUsuario = new Usuario();
    newUsuario.nombre = body.nombre;
    newUsuario.usuario = body.usuario;
    newUsuario.contraseña = body.contraseña;
    return this.usuariosRepo.save(newUsuario);
  }

  async update(id: number, body: any) {
    const usuario = await this.usuariosRepo.findOne(id);
    this.usuariosRepo.merge(usuario, body);
    return this.usuariosRepo.save(usuario);
  }

  async remove(id: number) {
    await this.usuariosRepo.delete(id);
    return true;
  }
}
