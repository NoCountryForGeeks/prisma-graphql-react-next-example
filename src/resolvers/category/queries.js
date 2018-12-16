export const queries = {
    categories: (parent, args, ctx, info) => ctx.db.query.categories({}, info)
}