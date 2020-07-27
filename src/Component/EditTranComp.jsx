import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
//import {Link} from 'react-router-dom'

 const api = "http://localhost:3002"

class EditTranComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_transaksi : this.props.location.state.id_transaksi,
            id_pelanggan : this.props.location.state.id_pelanggan,
            berat : this.props.location.state.berat,
            tgl_selesai : this.props.location.state.tgl_selesai,
            jenis_pakaian : this.props.location.state.jenis_pakaian,
            jumlah : this.props.location.state.jumlah,
            response:'',
            display:'none'
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    ubahTransaksi = (idtransaksi) =>{
        const data = qs.stringify({
            id_transaksi: idtransaksi,
            id_pelanggan: this.state.id_pelanggan,
            berat: this.state.berat,
            tgl_selesai: this.state.tgl_selesai,
            jenis_pakaian: this.state.jenis_pakaian,
            jumlah: this.state.jumlah
        })

        axios.put(api+ '/ubah/transaksi', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
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
                <h4>Form Edit Data Transaksi</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>No</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="id_transaksi" value={this.state.id_transaksi} onChange={this.handleChange} placeholder="Masukan Transaksi"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Id Pelanggan</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="id_pelanggan" value={this.state.id_pelanggan} onChange={this.handleChange} placeholder="Masukan Pelanggan"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Berat</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="berat" value={this.state.berat} onChange={this.handleChange} placeholder="Masukan Berat"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Tanggal Selesai</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="date" name="tgl_selesai" value={this.state.tgl_selesai} onChange={this.handleChange} placeholder="Masukan Tanggal Selesai"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jenis Pakaian</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="jenis_pakaian" value={this.state.jenis_pakaian} onChange={this.handleChange} placeholder="Masukan Jenis Pakaian"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jumlah</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukan Jumlah"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>this.ubahTransaksi(this.state.id_transaksi)}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditTranComp;