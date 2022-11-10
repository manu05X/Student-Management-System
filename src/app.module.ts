import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { StreamModule } from './stream/stream.module';
import { SubjectModule } from './subject/subject.module';
import { MarksModule } from './marks/marks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [StudentModule, StreamModule, SubjectModule, MarksModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
