import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: 'subject' })
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'subjectName', nullable: true })
  subjectName: string;

  @Column({ name: 'streamId' })
  streamId: number;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
