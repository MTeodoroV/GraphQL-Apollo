import db from "../config/connection.js";

export const genreModel = {
    listAll() {
        const query = `SELECT * FROM genre`;

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

    get(id) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM genre WHERE id = ${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    add(name){
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO genre(name) VALUES("${name}")`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    async update(id, name){
        return new Promise((resolve, reject) => {
            db.query(`UPDATE genre SET name="${name}" WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    },

    async delete(id){
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM genre WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}