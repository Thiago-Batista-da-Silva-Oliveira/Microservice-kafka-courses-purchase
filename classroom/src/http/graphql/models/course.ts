import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field(() => ID)
  id: string;
  @Field()
  title: string;
  @Field()
  slug: string;
}
