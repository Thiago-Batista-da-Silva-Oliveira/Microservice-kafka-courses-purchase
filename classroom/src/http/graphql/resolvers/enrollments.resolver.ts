import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentService } from 'src/services/enrollments.services';
import { StudentsService } from 'src/services/students.service';
import { Enrollment } from '../models/enrollement';

@Resolver(() => Enrollment)
export class EnrollmentResolver {
  constructor(
    private enrollmentService: EnrollmentService,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    ) {}
  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments() {
    return this.enrollmentService.listAllEnrollments();
  }

  @ResolveField()
  student(@Parent() enrollment: Enrollment) {
    return this.studentsService.getStudentById(enrollment.studentId);
  }

  @ResolveField()
  course(@Parent() enrollment: Enrollment){
    return this.coursesService.getCourseById(enrollment.courseId);
  }
}
