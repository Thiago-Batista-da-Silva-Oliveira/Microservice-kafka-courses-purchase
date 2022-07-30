import { PrismaService } from 'src/database/prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllStudents(): import(".prisma/client").PrismaPromise<import(".prisma/client").Student[]>;
    getStudentByAuthUserId(authUserId: string): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
    getStudentById(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
}
