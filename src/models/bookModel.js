import db from "../config/connection.js";

export const bookModel = {
    all(){
        const query = `SELECT * FROM book`;

        return new Promise((resolve, reject) => {
            db.query(query, (result, error) => {
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
            db.query(`SELECT * FROM book WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    add(name, description, page_number, release_date, author_id, genre_id){
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO book(name, description, page_number, release_date, author_id
                genre_id) VALUES(name="${name}", description="${description}", 
                page_number="${page_number}", release_date="${release_date}", 
                author_id=${author_id}, genre_id=${genre_id})`, (error, result) => {
                    if(error){
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
        });
    },

    async update(id, name, description, page_number, release_date, author_id, genre_id){
        return new Promise((resolve, reject) => {
            db.query(`UPDATE FROM book SET name="${name}", description="${description}", 
            page_number="${page_number}", release_date="${release_date}", 
            author_id=${author_id}, genre_id=${genre_id} WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    async delete(id){
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM book WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error)
                } else {
                    resolve(result);
                }
            });
        });
    }
}