import { CoursesService } from 'src/services/courses.service';
import { EnrollmentService } from 'src/services/enrollments.services';
import { StudentsService } from 'src/services/students.service';
import { Enrollment } from '../models/enrollement';
export declare class EnrollmentResolver {
    private enrollmentService;
    private coursesService;
    private studentsService;
    constructor(enrollmentService: EnrollmentService, coursesService: CoursesService, studentsService: StudentsService);
    enrollments(): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
    student(enrollment: Enrollment): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
    course(enrollment: Enrollment): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course>;
}
