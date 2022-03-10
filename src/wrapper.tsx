import React from 'react'

export class Wrapper extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return <div>
            <h1>Title</h1>
            {this.props.children}
            <footer>Footer</footer>
        </div>
    }
}
