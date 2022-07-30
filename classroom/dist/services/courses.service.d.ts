import { PrismaService } from 'src/database/prisma/prisma.service';
interface CreateCourseParams {
    title: string;
}
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllCourses(): import(".prisma/client").PrismaPromise<import(".prisma/client").Course[]>;
    getCourseById(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course>;
    createCourse({ title }: CreateCourseParams): Promise<import(".prisma/client").Course>;
}
export {};
