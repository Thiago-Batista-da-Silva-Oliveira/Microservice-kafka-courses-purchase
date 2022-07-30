import { PrismaService } from 'src/database/prisma/prisma.service';
interface GetByCourseAndStudentIdParams {
    courseId: string;
    studentId: string;
}
export declare class EnrollmentService {
    private prisma;
    constructor(prisma: PrismaService);
    getByCourseAndStudentId({ courseId, studentId, }: GetByCourseAndStudentIdParams): import(".prisma/client").Prisma.Prisma__EnrollmentClient<import(".prisma/client").Enrollment>;
    listAllEnrollments(): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
    listEnrollmentsByStudent(studentId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
}
export {};
