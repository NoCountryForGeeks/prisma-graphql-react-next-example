import { mutations as categoryMutations, queries as categoryQueries } from './category';

export const resolvers = {
    Mutation: {
        ...categoryMutations
    },
    Query: {
        ...categoryQueries
    }
}