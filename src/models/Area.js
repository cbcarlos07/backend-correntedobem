import Model from './interface'
import MySQL from '../helpers/MySQL'
export default class Area extends Model{
    static table = 'area'

    static subArea(area, client){
        
        const query = {
            text:`SELECT a.*
                         ,( 
                            SELECT COUNT(*) FROM area aa WHERE aa.parent_id = a.id
                           ) total
                       FROM area a
                       WHERE a.parent_id = ?
                       ORDER BY a.order_area
            `,
            values: [ area ]    
        }

        return MySQL.executeQuery(query,client);
    }
}