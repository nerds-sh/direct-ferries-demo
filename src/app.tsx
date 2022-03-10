import React from 'react'

export class App extends React.Component<any, any> {
    private interval: any

    constructor(props: any) {
        super(props)
        this.state = { count: 0 }
    }

    increment = () => this.setState({ count: this.state.count + 1 })

    getParity = () => this.state.count % 2 === 0 ? 'even' : 'odd'

    componentDidMount() {
        this.interval = setInterval(this.increment, 1000)
    }

    componentDidUpdate(_prevState: Readonly<any>) {
        console.log('Current counter\'s parity is ', this.getParity())
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <div>
            Count: {this.state.count}
        </div>
    }
}
