import db from "../config/connection.js";

export const userModel = {
    all(){
        const query = `SELECT * FROM user`;

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
            db.query(`SELECT * FROM user WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            })
        });
    },

    add(name, email, password){
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO user(name, email, password) VALUES ("${name}", "${email}", 
            "${password}")`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    update(id, name, email, password){
        return new Promise((resolve, reject) => {
            db.query(`UPDATE user SET name="${name}", 
            email="${email}", password="${password}" WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                    console.log(error)
                } else {
                    resolve(result);
                }
            });
        });
    },

    delete(id){
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM user WHERE id=${id}`, (error, result) => {
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}