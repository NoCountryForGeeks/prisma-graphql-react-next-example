export const mutations = {
    createCategory: (parent, args, ctx, info) => ctx.db.mutation.createCategory({ data: args }, info)
}