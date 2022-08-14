import { genreModel } from "../../models/genreModel.js";

export const genreResolver = {
    Query: {
        genres() {
            return genreModel.listAll();
        },

        genre(_, args) {
            return genreModel.get(args.id);
        }
    },

    Mutation: {
        async addGenre(_, args) {
            try {
                genreModel.add(args.name);
            } catch(error) {
                return false;
            }

            return args;
        },

        async updateGenre(_, args){
            return await genreModel.get(args.id).then(async (genre) => {
                try {
                    const response = await genreModel.update(args.id, args.name? args.name : args.name);
                } catch(error) {
                    return false;
                }
                return args;
            }) 
        },

        async deleteGenre(_, args){
            return await genreModel.get(args.id).then(async (genre) => {
                try {
                    const response  = await genreModel.delete(args.id);
                } catch(error) {
                    return false;
                }
                return true;
            })
        }
    }
};