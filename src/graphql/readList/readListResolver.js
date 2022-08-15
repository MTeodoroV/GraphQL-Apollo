import { readListModel } from "../../models/readListModel.js";

export const readListResolver = {
    Query: {
        readLists(){
            return readListModel.all();
        },

        readList(_, args){
            return readListModel.get(args.id);
        }
    },

    Mutation: {
        async addReadList(_, args){
            try {
                readListModel.add(
                    args.book_id,
                    args.user_id,
                    args.status
                )
            } catch(error) {
                return false;
            }
            return args;
        },

        async updateReadList(_, args){
            return await readListModel.get(args.id).then(async (readList) => {
                try{
                    readListModel.update(
                        args.id,
                        args.book_id? args.book_id : args.book_id,
                        args.user_id? args.user_id : args.user_id,
                        args.status? args.status : args.status
                    )
                } catch(error) {
                    return false;
                }
                return args;
            });
        },

        async deleteReadList(_, args){
            try {
                readListModel.delete(args.id);
            } catch(error) {
                return false
            }
            return true;
        }
    }
}