import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adoption-requests')
export class AdoptionRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status: 'pending' | 'approved' | 'rejected';

  @Column({ nullable: true, type: 'text' })
  message: string;

  @ManyToOne(() => Animal, (animal) => animal.adoptionRequests)
  animal: Animal;

  @ManyToOne(() => User, (user) => user.adoptionRequests)
  adopter: User;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
