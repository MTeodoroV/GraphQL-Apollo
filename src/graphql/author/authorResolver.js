import { authorModel } from "../../models/authorModel.js"

export const authorResolver =  {
    Query: {
        authors(){
            return authorModel.all();
        },

        author(_, args){
            return authorModel.get(args.id);
        }
    },

    Mutation: {
        async addAuthor(_, args){
            try {
                authorModel.add(args.name);
            } catch(error){
                return false;
            }
            return args;
        },

        async updateAuthor(_, args){
            return await authorModel.get(args.id).then(async (author) => {
                try {
                    const response = await authorModel.update(args.id, args.name? args.name : args.name, args.update_at)
                } catch(error) {
                    return false;
                }
                return args;
            })
        },

        async deleteAuthor(_, args){
            return await authorModel.get(args.id).then(async (author) => {
                try{
                    const response = await authorModel.delete(args.id)
                } catch(error) {
                    return false;
                }
                return true;
            })
        }
    }
}