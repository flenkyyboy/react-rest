import React, { Component } from 'react'
import PostList from './postList'
import UserList from './userList'

class ButtonClick extends Component {
    constructor(props) {
        super(props)

        this.state = {
            component: false,
            userComponent: false
        }
    }
    clickHandler = () => {
        this.setState({ component: true })
    }
    changeHandler = () => {
        this.setState({userComponent:true})
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Post List</button>
                {
                    this.state.component ?
                        <PostList></PostList> : null
                }
                <button onClick={this.changeHandler}>User list</button>
                {
                    this.state.userComponent ?
                        <UserList></UserList> : null
                }
            </div>
        )
    }
}

export default ButtonClick
