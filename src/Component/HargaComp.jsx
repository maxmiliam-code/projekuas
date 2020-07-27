import React, { Component } from 'react'
import axios from 'axios'
import {Table, Button, Container, Alert} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3002'

class HargaComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            harga: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil/harga').then(res=>{
            this.setState({
                harga: res.data.values
            })
        })
    }
    
    render() {
        return (
            <Container>
                <h2>Harga</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Harga</th>
                            <th>Opsi</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.harga.map(harga =>
                            <tr key={harga.id_harga}>
                                <td>{harga.harga}</td>
                                <td>
                                    <Link to = {
                                        {
                                            pathname: '/harga/edit',
                                            state: {
                                                id_harga: harga.id_harga,
                                                harga: harga.harga,
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

export default HargaComp