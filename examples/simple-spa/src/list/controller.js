// controller
import React, { h } from 'vdom-engine/share'

export default class Controller {
	constructor() {
		this.willMount = this.willMount.bind(this)
		this.didMount = this.didMount.bind(this)
		this.willUpdate = this.willUpdate.bind(this)
		this.didUpdate = this.didUpdate.bind(this)
		this.willUnmount = this.willUnmount.bind(this)
		this.goTo = this.goTo.bind(this)
	}
	init($location, $history) {
		this.$location = $location
		this.$history = $history
	}
	update($location, $history) {
		this.$location = $location
		this.$history = $history
	}
	render() {
		return (
			<div
				hook-willMount={this.willMount}
				hook-didMount={this.didMount}
				hook-willUpdate={this.willUpdate}
				hook-didUpdate={this.didUpdate}
				hook-willUnmount={this.willUnmount}
			>
				<h1>list: { JSON.stringify(this.$location, null, 2) }</h1>
				<ul>
					<li><a attr-href="/home" on-click={this.goTo}>home page</a></li>
					<li><a attr-href="/list" on-click={this.goTo}>list page</a></li>
					<li><a attr-href="/detail" on-click={this.goTo}>detail page</a></li>
				</ul>
			</div>
		)
	}
	goTo(event) {
		event.preventDefault()
		let href = event.currentTarget.getAttribute('href')
		this.$history.goTo(href)
	}
	willMount() {
		console.log('willMount')
	}
	didMount() {
		console.log('didMount')
	}
	willUpdate() {
		console.log('willUpdate')
	}
	didUpdate() {
		console.log('didUpdate')
	}
	willUnmount() {
		console.log('willUnmount')
	}
}