import { Animal } from 'src/animals/entities/animal.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column()
  password_hash: string;

  @Column({ nullable: true, length: 20 })
  phone: string;

  @Column({ nullable: true, type: 'text' })
  address: string;

  @Column({ type: 'enum', enum: ['user', 'admin'], default: 'user' })
  user_type: 'user' | 'admin';

  @OneToMany(() => Animal, (animal) => animal.ong)
  animais: Animal[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
