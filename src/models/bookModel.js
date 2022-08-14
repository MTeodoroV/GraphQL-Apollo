import db from "../config/connection.js";

export const bookModel = {
    all(){
        const query = `SELECT b.id, b.name, b.description, b.pageNumber, b.release_date, a.name AS author, 
        g.name AS genre, b.create_at, b.update_at FROM book AS b INNER JOIN author AS a INNER JOIN genre AS g ON a.id = b.author_id AND g.id = b.genre_id`;
        
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
        return new Promise((resolve, reject ) => {
            db.query(`SELECT b.id, b.name, b.description, b.pageNumber, b.release_date, a.name AS author, 
            g.name AS genre, b.create_at, b.update_at FROM book AS b INNER JOIN author AS a INNER JOIN genre AS g ON a.id = b.author_id AND g.id = b.genre_id WHERE b.id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    add(name, description, pageNumber, release_date, author_id, genre_id){
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO book(name, description, pageNumber, release_date, author_id,
                genre_id) VALUES("${name}", "${description}", 
                "${pageNumber}", "${release_date}", 
                ${author_id}, ${genre_id})`, (error, result) => {
                    if(error){
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
        });
    },

    async update(id, name, description, pageNumber, release_date, author_id, genre_id){
        return new Promise((resolve, reject) => {
            db.query(`UPDATE book SET name="${name}", description="${description}", 
            pageNumber="${pageNumber}", release_date="${release_date}", 
            author_id=${author_id}, genre_id=${genre_id} WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
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