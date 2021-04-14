import express from 'express';
var cors = require('cors')
import compression from 'compression';
import { graphqlHTTP } from 'express-graphql';
import schema from "./schema";


const app = express();
app.use('*', cors());
app.use(compression());

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`API http://localhost:${PORT}/graphql`)
)