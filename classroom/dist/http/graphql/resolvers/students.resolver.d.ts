import { AuthUser } from 'src/http/auth/current-user';
import { EnrollmentService } from 'src/services/enrollments.services';
import { StudentsService } from 'src/services/students.service';
import { Student } from '../models/student';
export declare class StudentsResolver {
    private studentsService;
    private enrollmentsService;
    constructor(studentsService: StudentsService, enrollmentsService: EnrollmentService);
    me(user: AuthUser): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
    students(): import(".prisma/client").PrismaPromise<import(".prisma/client").Student[]>;
    enrollments(student: Student): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
}
