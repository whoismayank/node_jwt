// import pool from '../../config/database';
const pool = require('../../config/database');
module.exports = {
    create : (data,callBack) => {
        pool.query(
            `insert into registration (firstName, lastName, gender, email, password, number) 
            value(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                
            ],
            (error,result,fields) =>{
                if(error){
                    return callBack(error);
                } else {
                    return callBack(null,result);
                }
            }
        )
    }
}