import { Student } from './student';
import { Course } from './course';
export declare class Enrollment {
    id: string;
    student: Student;
    studentId: string;
    course: Course;
    courseId: string;
    canceledAt: Date;
    createdAt: Date;
}
