import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CategoriasService } from './../services/categorias.service';

@Controller('api/categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoriasService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.categoriasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.categoriasService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriasService.remove(id);
  }
}
