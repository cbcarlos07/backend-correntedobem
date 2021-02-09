import MySQLHelper from "../../helpers/mysql";
import Debug from 'debug'
const log = Debug('Model');

export default class Model{ 

    static name;
    static table;

    static first(){
        return{
            create:async (...args) => {return (await this.prototype.constructor.create(...args)).rows[0]},
            find:async (...args) => {return (await this.prototype.constructor.find(...args)).rows[0]},
            update:async (...args) => {return (await this.prototype.constructor.update(...args)).rows[0]},
            list:async (...args) => {return (await this.prototype.constructor.list(...args)).rows[0]},
            delete:async (...args) => {return (await this.prototype.constructor.delete(...args)).rows[0]}
        }
    }


    static rows(){
        return{
            create:async (...args) => {return (await this.prototype.constructor.create(...args)).rows},
            find:async (...args) => {return (await this.prototype.constructor.find(...args)).rows},
            update:async (...args) => {return (await this.prototype.constructor.update(...args)).rows},
            list:async (...args) => {return (await this.prototype.constructor.list(...args)).rows},
            delete:async (...args) => {return (await this.prototype.constructor.delete(...args)).rows}
        }
    }


    static create(insert,client = null){
        
        const queryValues = new MySQLHelper.QueryValues();
        let fields,insertValues;
        if(Array.isArray(insert)){
            const objectKeys = Object.keys(insert[0])
            fields = `(${objectKeys.join(',')})`
            insertValues =   insert.map(row => `(${objectKeys.map((column) => `${queryValues.AddValue(row[column])}`).join(',')})`).join(',')
        }else{
            const objectKeys = Object.keys(insert)
            fields = `(${objectKeys.join(',')})`
            insertValues = `(${objectKeys.map(column => `${queryValues.AddValue(insert[column])}`).join(',')})` 
        }

        const query = {
            text: `
                INSERT into 
                    ${this.table}
                    ${fields}
                VALUES
                    ${insertValues}
                `,
            values:queryValues.GetValues(),
        }       
        
        return MySQLHelper.executeQuery(query,client);
    }

    static find({where},client = null){        
        const queryValues = new MySQLHelper.QueryValues();
        const whereValues = Object.keys(where).map(
            (column) => {
                if(Array.isArray(where[column])){
                    return `${column} in (${where[column].map(row => queryValues.AddValue(row)).join(',')})`
                }
                else if(where[column] === 'null'){
                    return `${column} is null`
                }
                else if(where[column] === 'not null'){
                    return `${column} is not null`
                }
                else if(where[column].not){
                    if(Array.isArray(where[column].not)){
                        return `${column} not in (${where[column].not.map(row => queryValues.AddValue(row)).join(',')})`
                    }
                    return `${column} <> ${queryValues.AddValue(where[column].not)}`
                }
                else{
                    return `${column} = ${queryValues.AddValue(where[column])}`
                }
            } 
        ).join(' and ')

        const query = {
            text: `
                Select 
                    *
                FROM
                    ${this.table}
                WHERE
                    ${whereValues}
                `,
            values:queryValues.GetValues(),
        }
        log("query",query);
        return MySQLHelper.executeQuery(query,client);
    }

    static update({where,values},client){
        log("update");

        const queryValues = new MySQLHelper.QueryValues();
        
        const SetFields = Object.keys(values).map(column_name => `${column_name} = ${queryValues.AddValue(values[column_name])}` ).join(',')
        
        const whereValues = Object.keys(where).map(
            (column) => {
                if(Array.isArray(where[column])){
                    return `${column} in (${where[column].map(row => queryValues.AddValue(row)).join(',')})`
                }
                else if(where[column] === 'null'){
                    return `${column} is null`
                }
                else if(where[column] === 'not null'){
                    return `${column} is not null`
                }
                else if(where[column].not){
                    if(Array.isArray(where[column].not)){
                        return `${column} not in (${where[column].not.map(row => queryValues.AddValue(row)).join(',')})`
                    }
                    return `${column} <> ${queryValues.AddValue(where[column].not)}`
                }
                else{
                    return `${column} = ${queryValues.AddValue(where[column])}`
                }
            } 
        ).join(' and ')


        const query = {
            text: `
                UPDATE 
                    ${this.table} 
                SET
                    ${ SetFields }
                WHERE 
                    ${whereValues}
                `,
                values: queryValues.GetValues(),
            }
        
        return MySQLHelper.executeQuery(query,client);
    }

    static list(order = ''){
        
        const query = {
            text: `
                SELECT 
                    *
                FROM ${this.table}
                ${order}    
                `,
            values: [],
        }
        
        return MySQLHelper.executeQuery(query);
    }

    static delete({where},client = null){
        log("delete");
        const queryValues = new MySQLHelper.QueryValues();
        const whereValues = Object.keys(where).map(
            (column) => {
                if(Array.isArray(where[column])){
                    return `${column} in (${where[column].map(row => queryValues.AddValue(row)).join(',')})`
                }
                else if(where[column] === 'null'){
                    return `${column} is null`
                }
                else if(where[column] === 'not null'){
                    return `${column} is not null`
                }
                else if(where[column].not){
                    if(Array.isArray(where[column].not)){
                        return `${column} not in (${where[column].not.map(row => queryValues.AddValue(row)).join(',')})`
                    }
                    return `${column} <> ${queryValues.AddValue(where[column].not)}`
                }
                else{
                    return `${column} = ${queryValues.AddValue(where[column])}`
                }
            } 
        ).join(' and ')

        const query = {
            text: `
                DELETE FROM
                    ${this.table}
                WHERE
                    ${whereValues}
                `,
            values:queryValues.GetValues(),
        }
        log("query",query);
        return MySQLHelper.executeQuery(query,client);
    }

}