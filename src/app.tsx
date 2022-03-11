import React, { useEffect, useState } from 'react'

export const App = ({message}: {message: string}) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    useEffect(() => {
        const interval = setInterval(increment, 1000)

        console.log(message)

        return () => clearInterval(interval)
    }, [count])

    return <div style={{height: '80vh'}}>
        Count: {count}
    </div>
}
