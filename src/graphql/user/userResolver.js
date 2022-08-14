import { userModel } from "../../models/UserModel.js";

export const userResolver = {
    Query: {
        users(){
            return userModel.all();
        },

        user(_, args){
            return userModel.get(args.id);
        }
    },

    Mutation: {
        async addUser(_, args){
            try {
                userModel.add(args.name, args.email, args.password);
            } catch(error) {
                return false;
            }
            return args;
        },

        async updateUser(_, args){
            return await userModel.get(args.id).then(async (user) => {
                try {
                    const response = await userModel.update(
                        args.id,
                        args.name? args.name : args.name,
                        args.email? args.email: args.email,
                        args.password? args.password: args.password
                    )
                } catch(error) {
                    return false;
                }
                return args;
            });
        },

        async deleteUser(_, args){
            return await userModel.get(args.id).then(async (genre) => {
                try{
                    const response  = userModel.delete(args.id);
                } catch {
                    return false;
                }
                return true;
            });
        }
    }
}