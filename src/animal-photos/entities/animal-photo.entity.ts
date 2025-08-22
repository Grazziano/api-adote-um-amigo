import { Animal } from 'src/animals/entities/animal.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('animal_photos')
export class AnimalPhoto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  photo_url: string;

  @ManyToOne(() => Animal, (animal) => animal.photos, { onDelete: 'CASCADE' })
  animal: Animal;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
