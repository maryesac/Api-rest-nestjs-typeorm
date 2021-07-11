import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cursoID: number;

  @Column()
  nombre: string;

  @Column()
  duracion: number;

  @Column()
  docente: string;
}
