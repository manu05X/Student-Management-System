import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'firstname' })
  firstName: string;

  @Column({ name: 'lastname' })
  lastName: string;

  @Column({ name: 'rollno' })
  rollNo: string;

  @Column({ name: 'streamid' })
  streamId: number;

  @Column({ name: 'year' })
  year: number;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
