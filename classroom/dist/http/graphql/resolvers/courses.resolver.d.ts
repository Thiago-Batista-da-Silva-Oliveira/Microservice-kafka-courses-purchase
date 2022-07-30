import { AuthUser } from 'src/http/auth/current-user';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentService } from 'src/services/enrollments.services';
import { StudentsService } from 'src/services/students.service';
import { CreateCourseInput } from '../inputs/create-course-input';
export declare class CourseResolver {
    private coursesService;
    private studentsService;
    private enrollmentsService;
    constructor(coursesService: CoursesService, studentsService: StudentsService, enrollmentsService: EnrollmentService);
    courses(): import(".prisma/client").PrismaPromise<import(".prisma/client").Course[]>;
    course(id: string, user: AuthUser): Promise<import(".prisma/client").Course>;
    createCourse(data: CreateCourseInput): Promise<import(".prisma/client").Course>;
}
