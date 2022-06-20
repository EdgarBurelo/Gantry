import 'reflect-metadata'
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { Container } from "typedi";

import { CompanyResolver } from './Company/Resolver/CompanyResolver'

import {Company} from "./Database/db";

let PORT: number = 6006;
Container.set({ id: "CompanyTable", factory: () => Company });


async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CompanyResolver],
        container: Container,
        emitSchemaFile: true,
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();