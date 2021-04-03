import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState(prevStart => ({
            count: prevStart.count + 1
        }))
    }
    decrement = () => {
        this.setState(prevStart => ({
            count: prevStart.count - 1
        }))
    }
    multiValue = () => {
        this.setState(prevStart => ({
            count: prevStart.count * 3
        }))
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.multiValue}>3x</button>
            </div>
        )
    }
}

export default ClickCount
