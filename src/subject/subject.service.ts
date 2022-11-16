import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  addSubject(subject: Subject): Promise<Subject> {
    return this.subjectRepository.save(subject);
  }

  findOne(id: number): Promise<Subject> {
    return this.subjectRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
