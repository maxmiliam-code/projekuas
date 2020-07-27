import React, { Component } from 'react'
import axios from 'axios'
import {Table, Button, Container, Alert} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3002'

class UserComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil/user').then(res=>{
            this.setState({
                user: res.data.values
            })
        })
    }
    
    render() {
        return (
            <Container>
                <h2>user</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>role</th>
                            <th>Tanggal Daftar</th>
                            <th>Opsi</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.user.map(user =>
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>{user.tanggal_daftar}</td>

                                <td>
                                    <Link to = {
                                        {
                                            pathname: '/user/edit',
                                            state: {
                                                id: user.id,
                                                user: user.user,
                                            }
                                        }
                                    }>
                                        <Button>Edit</Button> 
                                    </Link>
                                </td>
                            </tr>

                            )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default UserComp