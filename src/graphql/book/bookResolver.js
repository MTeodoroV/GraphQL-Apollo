import { bookModel } from "../../models/bookModel.js";

export const bookResolver = {
    Query: {
        books(){
            return bookModel.all();
        },

        book(_,args){
            return bookModel.get(args.id);
        }
    },

    Mutation: {
        async addBook(_,args){
            try {
                bookModel.add(args.name, args.description, args.pageNumber, args.release_date, args.author_id, args.genre_id)
            } catch {
                return false;
            }
            return args;
        },
    

        async updateBook(_, args) {
            return await bookModel.get(args.id).then(async (book) => {
                try {
                    const response = await bookModel.update(
                        args.id,
                        args.name? args.name : args.name, 
                        args.description? args.description : args.description, 
                        args.pageNumber? args.pageNumber : args.pageNumber, 
                        args.release_date? args.release_date : args.release_date, 
                        args.author_id? args.author_id : args.author_id, 
                        args.genre_id? args.genre_id : args.genre_id);
                } catch (error) {
                    console.log(error)
                    return false;
                }
                return args;
            })
        },

        async deleteBook(_,args) {
            return await bookModel.delete(args.id).then(async (book) => {
                try{
                    bookModel.delete(args.id);
                } catch(error) {
                    return false;
                }

                return true;
            })
        }
    }
};