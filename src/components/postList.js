import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            errMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.setState({
                post: response.data
            })
        }).catch((error) => {
            console.log(error);
            this.setState({ errMsg: 'Error Retriving Data' })
        })
    }

    render() {
        const { post, errMsg } = this.state
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post.length ?
                                post.map((post) =>
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
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

export default PostList
