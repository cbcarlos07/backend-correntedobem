import Model from './interface'
import MySQL from '../helpers/MySQL'
export default class Equipe extends Model{
    static table = 'equipe'

    static team(param , client){
        
        const query = {
            text:`SELECT e.*
                         ,( 
                            SELECT COUNT(*) FROM equipe ee WHERE ee.parent_id = e.id
                           ) total
                       FROM equipe e
                       WHERE e.area_id = ?
                       AND e.parent_id = ?
                       ORDER BY e.order_item    
            `,
            values: [ param.area, param.pai ]    
        }

        return MySQL.executeQuery(query,client);
    }
    static equipe(param , client){
        
        const query = {
            text:`SELECT e.*,
                    (SELECT ee.name FROM equipe ee WHERE ee.id = e.parent_id LIMIT 1) team
                FROM equipe e
                WHERE e.area_id = ?   
            `,
            values: [ param ]    
        }

        return MySQL.executeQuery(query,client);
    }

}