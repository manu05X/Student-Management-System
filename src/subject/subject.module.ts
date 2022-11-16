import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
