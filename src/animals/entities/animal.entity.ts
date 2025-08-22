import {
  Column,
  CreateDateColumn,
  Entity,
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

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
