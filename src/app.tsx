import React from 'react'

export class App extends React.Component<any, any> {
    private interval: any

    constructor(props: any) {
        super(props)
        this.state = { count: 0 }
    }

    increment = () => this.setState({ count: this.state.count + 1 })

    componentDidMount() {
        this.interval = setInterval(this.increment, 1000)
    }

    componentDidUpdate(_prevState: Readonly<any>) {
        console.log(this.props.message)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <div style={{height: '80vh'}}>
            Count: {this.state.count}
        </div>
    }
}
