import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, Alert} from 'reactstrap'
import {Link,NavLink} from 'react-router-dom'

const api = 'http://localhost:3002'

class TransaksiComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            transaksi: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil/transaksi').then(res=>{
            this.setState({
                transaksi: res.data.values
            })
        })
    }
    
    Deletetransaksi = (idtransaksi)=>{
        const {transaksi} = this.state
        const data = qs.stringify({
            id_transaksi: idtransaksi
        })
        axios.delete(api+'/hapus/transaksi', {
            data: data,
            headers: {'Content-type' : 'application/x-www-form-urlencoded'}
        }).then(json=>{
            if(json.data.status ===200){
                this.setState({
                    response: json.data.values,
                    transaksi: transaksi.filter(transaksi=> transaksi.id_transaksi !== idtransaksi),
                    display: 'block'
                })
                this.props.history.push('/transaksi')
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
                <h2>Data transaksi</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <NavLink to="/transaksi/tambah" className="nav-link"><Button color="success">Tambah Data</Button></NavLink>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>  
                            <th>Nama Pelanggan</th>
                            <th>Berat</th>
                            <th>Tgl.Selesai</th>
                            <th>Jenis Pakaian</th>
                            <th>Jumlah</th>
                            <th>Opsi</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.transaksi.map(transaksi =>
                            <tr key={transaksi.id_transaksi}>
                                <td>{transaksi.id_pelanggan}</td>
                                <td>{transaksi.berat}</td>
                                <td>{transaksi.tgl_selesai}</td>
                                <td>{transaksi.jenis_pakaian}</td>
                                <td>{transaksi.jumlah}</td>
                                <td>
                                    <Link to = {
                                        {
                                            pathname: '/transaksi/edit',
                                            state: {
                                                id_transaksi: transaksi.id_transaksi,
                                                id_pelanggan: transaksi.id_pelanggan,
                                                berat: transaksi.berat,
                                                tgl_selesai: transaksi.tgl_selesai,
                                                jenis_pakaian: transaksi.jenis_pakaian,
                                                jumlah: transaksi.jumlah
                                            }
                                        }
                                    }>
                                        <Button>Edit</Button>
                                        
                                    </Link>
                                    <span></span>
                                        <Button onClick={()=>this.Deletetransaksi(transaksi.id_transaksi)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                            )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default TransaksiComp