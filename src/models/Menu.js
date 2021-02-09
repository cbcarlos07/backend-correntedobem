import Model from './interface'

export default class Menu extends Model{
    static table = 'menu'

    static team(param , client){
        
        const query = {
            text:`SELECT *
                   FROM menu m
               ORDER BY m.order_item
            `,
            values: [ param.area, param.pai ]    
        }

        return MySQL.executeQuery(query,client);
    }
}