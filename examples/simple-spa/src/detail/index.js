// controller
import React, { h } from 'vdom-engine/share'

export default class Controller {
	constructor(context) {
		console.log('receive context', context)
		this.willMount = this.willMount.bind(this)
		this.didMount = this.didMount.bind(this)
		this.willUpdate = this.willUpdate.bind(this)
		this.didUpdate = this.didUpdate.bind(this)
		this.willUnmount = this.willUnmount.bind(this)
		this.jump = this.jump.bind(this)
	}
	init($location) {
		this.$location = $location
		console.log('init', $location)
		return this.render()
	}
	update($location) {
		console.log('update', $location)
	}
	destroy($location) {
		console.log('destroy', $location)
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
					<li><a attr-href="/home" on-click={this.jump}>home page</a></li>
					<li><a attr-href="/list" on-click={this.jump}>list page</a></li>
					<li><a attr-href="/detail" on-click={this.jump}>detail page</a></li>
				</ul>
			</div>
		)
	}
	jump(event) {
		event.preventDefault()
		let { pathname, search } = event.currentTarget
		console.log('jump')
		this.goTo({
			pathname,
			search,
			state: {
				name: 'detail'
			}
		})
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