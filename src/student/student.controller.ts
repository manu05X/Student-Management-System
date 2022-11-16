import { Body, Controller, Get, Post } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';

interface StudentDTO {
  firstName: string;
  lastName: string;
  rollNo: string;
  streamId: number;
  year: number;
}

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/all')
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Post('/add')
  add(@Body() student: StudentDTO): Promise<Student> {
    const std = new Student();

    std.firstName = student.firstName;
    std.lastName = student.lastName;
    std.rollNo = student.rollNo;
    std.streamId = student.streamId;
    std.year = student.year;
    std.createdAt = new Date();

    return this.studentService.addStudent(std);
  }
}
