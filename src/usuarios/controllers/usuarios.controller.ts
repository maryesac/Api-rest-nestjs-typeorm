import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { UsuariosService } from './../services/usuarios.service';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usuariosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }
}
