import express from 'express';
var cors = require('cors')
import compression from 'compression';
import { IResolvers } from '@graphql-tools/utils';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphqlHTTP } from 'express-graphql';


const app = express();
app.use('*', cors());
app.use(compression());


// Types GraphQL
const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
`

const resolvers: IResolvers = {
    Query: {
        hola(): string {
            return 'Hola Mundo';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso GraphQL';
        }
    }
}

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`API http://localhost:${PORT}/graphql`)
)