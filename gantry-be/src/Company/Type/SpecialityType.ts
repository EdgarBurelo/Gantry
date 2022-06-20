import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SpecialityType {
    @Field()
    name: string;
}
