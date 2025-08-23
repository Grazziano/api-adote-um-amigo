import { AdoptionRequest } from 'src/adoption-requests/entities/adoption-request.entity';
import { Adoption } from 'src/adoptions/entities/adoption.entity';
import { AnimalPhoto } from 'src/animal-photos/entities/animal-photo.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ type: 'enum', enum: ['dog', 'cat', 'other'] })
  species: 'dog' | 'cat' | 'other';

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  age: number;

  @Column({ type: 'enum', enum: ['male', 'female'] })
  sex: 'male' | 'female';

  @Column({ type: 'enum', enum: ['small', 'medium', 'large'] })
  size: 'small' | 'medium' | 'large';

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: ['available', 'adopted', 'in progress'] })
  status: 'available' | 'adopted' | 'in progress';

  @ManyToOne(() => User, (user) => user.animais)
  ong: User;

  @OneToMany(() => AnimalPhoto, (photo) => photo.animal)
  photos: AnimalPhoto[];

  @OneToMany(() => AdoptionRequest, (request) => request.animal)
  adoptionRequests: AdoptionRequest[];

  @OneToMany(() => Adoption, (adoption) => adoption.animal)
  adoptions: Adoption[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
