import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const GetAllUsers = query({
    handler: async (ctx) => {
        const users = await ctx.db.query("UserTable").collect();
        return users;
    }
})

export const GetUserByEmail = query({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("UserTable")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();
        return user;
    }
})

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
    },

    handler: async (ctx, args) => {

        //if user already exists
        const user = await ctx.db.query("UserTable")
            .filter((q) => q.eq(q.field("email"), args.email))
            .collect();

        if (user.length === 0) {
            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl,
                subscription: 'free',
            }
            //If Not then create new user
            const result = await ctx.db.insert("UserTable", userData);
            return userData;
        }
        return user[0];
    }
})



