import db from "../config/connection.js"

export const readListModel = {
    all(){
        const query = `SELECT * FROM readlist`;

        return new Promise((resolve, reject) => {
            db.query(query, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    get(id){
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM readlist WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    add(book_id, user_id, status){
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO readlist(book_id. user_id, status) 
            VALUES("${book_id}", "${user_id}", ${status})`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    update(id, book_id, user_id, status){
        return new Promise((resolve, reject) => {
            db.query(`UPDATE readlist SET book_id="${book_id}", 
            user_id="${user_id}", status=${status} WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    delete(id){
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM readlist WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}