import { authModel } from "../../models/AuthModel.js";

export const authResolver = {
    Mutation: {
        async login(_, args, context) {
            return await authModel.login(args.email, args.password, context);
        },

        logout(_, __, context) {
            return authModel.logout(context);
        },
    },
};