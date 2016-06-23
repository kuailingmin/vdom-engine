import * as _ from '../share/util'

export default function composeMiddlewares(...middlewares) {
    return (createStore) => (accessor, initialState) => {
        let store = createStore(accessor, initialState)
        let middlewareAPI = {
            getState: store.getState,
            dispatch: store.dispatch,
        }
        let chain = middlewares.map(middleware => middleware(middlewareAPI))
        let dispatch = _.compose(...chain)(store.dispatch)
        let actions = _.createCollection(store.setter, dispatch)
        return {
            ...store,
            actions,
            dispatch,
        }
    }
}
