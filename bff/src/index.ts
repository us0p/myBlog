import { ApolloServer } from 'apollo-server';
import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`\nServer running on ${url}`)
})