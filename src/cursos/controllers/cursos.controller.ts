import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CursosService } from './../services/cursos.service';

@Controller('api/cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursosService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.cursosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.cursosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cursosService.remove(id);
  }
}
