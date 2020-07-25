import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, Alert} from 'reactstrap'
import {Link,NavLink} from 'react-router-dom'

const api = 'http://localhost:3002'

class PelangganComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pelanggan: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                pelanggan: res.data.values
            })
        })
    }
    
    Deletepelanggan = (idpelanggan)=>{
        const {pelanggan} = this.state
        const data = qs.stringify({
            id_pelanggan: idpelanggan
        })
        axios.delete(api+'/hapus', {
            data: data,
            headers: {'Content-type' : 'application/x-www-form-urlencoded'}
        }).then(json=>{
            if(json.data.status ===200){
                this.setState({
                    response: json.data.values,
                    pelanggan: pelanggan.filter(pelanggan=> pelanggan.id_pelanggan !== idpelanggan),
                    display: 'block'
                })
                this.props.history.push('/pelanggan')
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data pelanggan</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <NavLink to="/pelanggan/tambah" className="nav-link"><Button color="success">Tambah Data</Button></NavLink>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>    
                            <th>Nama</th>
                            <th>NO.HP</th>
                            <th>Alamat</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.pelanggan.map(pelanggan =>
                            <tr key={pelanggan.id_pelanggan}>
                                <td>{pelanggan.nama}</td>
                                <td>{pelanggan.no_hp}</td>
                                <td>{pelanggan.alamat}</td>
                                <td>
                                    <Link to = {
                                        {
                                            pathname: '/pelanggan/edit',
                                            state: {
                                                id_pelanggan: pelanggan.id_pelanggan,
                                                nama: pelanggan.nama,
                                                no_hp: pelanggan.no_hp,
                                                alamat: pelanggan.alamat
                                            }
                                        }
                                    }>
                                        <Button>Edit</Button>
                                        
                                    </Link>
                                    <span></span>
                                        <Button onClick={()=>this.Deletepelanggan(pelanggan.id_pelanggan)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                            )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default PelangganComp