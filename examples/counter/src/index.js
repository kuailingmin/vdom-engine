import React from 'vdom-engine/share'
import ReactDOM from 'vdom-engine/client'
import CounterUI from './CounterUI'
import store from './store'


let renderView = () => {
	ReactDOM.render(
		<CounterUI {...store.getState()} {...store.actions} />,
		document.getElementById('container')
	)
}

renderView()
store.subscribe(renderView)

console.log('start')