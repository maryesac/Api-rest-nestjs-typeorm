import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CursosService } from './services/cursos.service';
import { CursosController } from './controllers/cursos.controller';
import { Curso } from './entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  providers: [CursosService],
  controllers: [CursosController],
})
export class CursosModule {}
