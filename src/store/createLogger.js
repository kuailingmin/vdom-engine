// createLogger
const attr = 'info' in console ? 'info' : "log"
const pad = num => ('0' + num).slice(-2)
const getTime = typeof performance !== 'undefined' && performance.now
	? () => performance.now()
	: () => new Date().getTime()

export default function createLogger(options) {
	let { name = 'store' } = options
	const timeStore = {}

	return {
		start,
		end,
	}

	function start(key) {
		timeStore[key] = getTime()
	}

	function end(key, data, prevState, nextState) {
        const time = new Date()
        const formattedTime = `${ time.getHours() }:${ pad(time.getMinutes()) }:${ pad(time.getSeconds()) }`
        const takeTime = (getTime() - timeStore[key]).toFixed(2)
        const message = `${ name }-${prevState === nextState ? 'equal' : 'diff'}: action [${ key }] end at ${ formattedTime }, take ${ takeTime }ms`

        try {
            console.groupCollapsed(message)
        } catch (e) {
            try {
                console.group(message)
            } catch (e) {
                console.log(message)
            }
        }

        if (attr === 'log') {
            console[attr](data)
            console[attr](prevState)
            console[attr](nextState)
        } else {
        	let isError = nextState instanceof Error
            console[attr](`%c data`, `color: #03A9F4; font-weight: bold`, data)
            console[attr](`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState)
            console[attr](`%c ${isError ? 'error' : 'next state'}`, `color: #4CAF50; font-weight: bold`, nextState)
        }

        try {
            console.groupEnd()
        } catch (e) {
            console.log('-- log end --')
        }
    }
}