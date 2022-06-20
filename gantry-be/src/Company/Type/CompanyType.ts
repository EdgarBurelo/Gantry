import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CompanyType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    logo: string;

    @Field()
    specialty: string;

    @Field()
    city: string;
}
