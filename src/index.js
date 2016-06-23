import * as _ from './share/util'
import Share from './share/index'
import Client from './client/index'
import Server from './server/index'
import Router from './router/index'
import Store from './store/index'

const VdomEngine = {}
_.extend(VdomEngine, Share)
_.extend(VdomEngine, Client)
_.extend(VdomEngine, Server)
_.extend(VdomEngine, Router)
_.extend(VdomEngine, Store)

export default VdomEngine