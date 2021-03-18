import pool from '../../config/database';
module.exports = {
    create : (data,callBack) => {
        pool.query(
            `insert into registration (firstName, lastName, gender, email, password, number) 
            value(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.password,
                data.number,
                
            ],
            (error,result,fields) =>{
                if(error){
                    return callBack(error);
                } else {
                    return callBack(null,results);
                }
            }
        )
    }
}