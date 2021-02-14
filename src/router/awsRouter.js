import Router from 'restify-router'
import AwsController, {realtime} from '../controller/AwsController'

const router = new Router.Router()

const setRealtimeAws = io => {
    realtime(io)
}
router.post('',AwsController.create)
router.put('/:id',AwsController.update)
router.get('', AwsController.findAll)

export  { setRealtimeAws }
export default router

