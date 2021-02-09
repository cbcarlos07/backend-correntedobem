import mysql from 'mysql'
import config from '../config/db'
import Debug from 'debug'
const pool = mysql.createPool(config)
const log = Debug('MYSQL')
class QueryValues{
    index
    values = []
    constructor(){
        this.index = 1;
    }
    AddValue(value){
        this.values.push(value);
        return `?`;
    }
    GetValues(){
        return this.values;
    }
}

    const MySQLHelper = {
        
        getConnection(query, params = [], callback){
            
            pool.getConnection((err, connection)=>{                
                connection.query(query, params, (error, results)=>{
                   connection.release()
                   callback(error, results)
               })
            })
        },
        
        executeQuery(query){
            return new Promise((resolve, reject)=>{
                this.getConnection(query.text, query.values,(error, results)=>{
                    if( error ) reject(error)                    
                    let rows = Array.isArray( results ) ? results : [ results ]
                    resolve({rows})
                })
            })
            
        },
        
    
        
        QueryValues
    }
export default MySQLHelper
