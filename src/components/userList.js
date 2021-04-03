import React, { Component } from 'react'
import axios from 'axios'

class userList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            errMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({
                users: response.data
            })
        }).catch((error) => {
            console.log(error);
            this.setState({ errMsg: 'Error Retriving Data' })
        })
    }
    render() {
        const {users,errMsg} = this.state
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length ?
                                users.map((users) =>
                                    <tr key={users.id}>
                                        <td>{users.name}</td>
                                        <td>{users.username}</td>
                                        <td>{users.email}</td>
                                    </tr>
                                ) : null
                        }
                    </tbody>
                </table>
                {
                    errMsg ? <div>{errMsg}</div> : null
                }
            </div>
        )
    }
}

export default userList
