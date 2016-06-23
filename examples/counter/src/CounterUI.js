import React from 'vdom-engine/share'

export default function CounterUI({ count, INCREMENT, DECREMENT, INCREMENT_IF_ODD, ASYNC_INCREMENT }) {
	return (
		<p>
			Clicked: <span>{ count }</span> times
			{' '}
	       	<button on-click={ INCREMENT }>+</button>
	       	{' '}
	        <button on-click={ DECREMENT }>-</button>
	        {' '}
	        <button on-click={ INCREMENT_IF_ODD }>Increment if odd</button>
	        {' '}
	        <button on-click={ ASYNC_INCREMENT }>Increment async</button>
	        {' '}
	        <button on-dblclick={ INCREMENT }>Increment by dblclick</button>
	        {' '}
	        <button on-mousemove={ DECREMENT }>Decrement by mousemove</button>
	    </p>
	)
}