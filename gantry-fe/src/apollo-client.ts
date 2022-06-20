import {ApolloClient, InMemoryCache} from "@apollo/client";

const client: ApolloClient<any> = new ApolloClient({
    uri: 'http://127.0.0.1:6006/',
    cache: new InMemoryCache()
});

export { client };
