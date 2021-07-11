import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriasService } from './services/categorias.service';
import { CategoriasController } from './controllers/categorias.controller';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriasService],
  controllers: [CategoriasController],
})
export class CategoriasModule {}
