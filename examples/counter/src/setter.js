// setter for changing state

export let INCREMENT = (state, data) => {
    let { count } = state
    count += 1
    return {
        ...state,
        count
    }
}

export let DECREMENT = (state, data) => {
    let { count } = state
    count -= 1
    return {
        ...state,
        count
    }
}

export let INCREMENT_IF_ODD = (state, data) => {
    let { count } = state
    if (count % 2 !== 0) {
        count += 1
        return {
            ...state,
            count
        }
    }
    return state
}

export let ASYNC_INCREMENT = (state, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let { count } = state
            count += 1
            resolve({
                ...state,
                count
            })
        }, 1000)
    })
}