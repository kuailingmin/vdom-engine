import * as _ from './share/util'
import Share from './share/index'
import Client from './client/index'
import Server from './server/index'

const VdomEngine = {}
_.extend(VdomEngine, Share)
_.extend(VdomEngine, Client)
_.extend(VdomEngine, Server)

export default VdomEngine