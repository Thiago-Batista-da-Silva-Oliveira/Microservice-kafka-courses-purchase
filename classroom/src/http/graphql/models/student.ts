import { Field, ObjectType } from '@nestjs/graphql';
import { Enrollment } from './enrollement';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}
