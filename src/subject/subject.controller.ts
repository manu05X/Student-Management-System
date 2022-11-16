import { Body, Controller, Get, Post } from '@nestjs/common';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

interface SubjectDTO {
  subjectName: string;
  streamId: number;
}

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get('/all')
  findAll(): Promise<Subject[]> {
    return this.subjectService.findAll();
  }

  @Post('/add')
  add(@Body() subject: SubjectDTO): Promise<Subject> {
    const std = new Subject();

    std.subjectName = subject.subjectName;
    std.streamId = subject.streamId;
    std.createdAt = new Date();

    return this.subjectService.addSubject(std);
  }
}
