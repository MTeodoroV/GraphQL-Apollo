import db from "../config/connection.js";

export const authorModel = {
    all() {
        const query = `SELECT * FROM author`;

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
            db.query(`SELECT * FROM author WHERE id=${id}`, (error, result) => {
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
            db.query(`INSERT INTO author(name) VALUES("${name}")`, (error, result) => {
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
            db.query(`UPDATE author SET name="${name}" WHERE id=${id}`, (error, result) => {
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
            db.query(`DELETE FROM author WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}