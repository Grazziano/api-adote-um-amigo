import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adoptions')
export class Adoption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Animal, (animal) => animal.adoptions)
  animal: Animal;

  @ManyToOne(() => User, (user) => user.adoptions)
  adopter: User;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
