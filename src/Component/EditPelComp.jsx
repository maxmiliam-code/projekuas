import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
//import {Link} from 'react-router-dom'

 const api = "http://localhost:3002"

class EditPelComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_pelanggan : this.props.location.state.id_pelanggan,
            nama : this.props.location.state.nama,
            no_hp : this.props.location.state.no_hp,
            alamat : this.props.location.state.alamat,
            response:'',
            display:'none'
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    ubahPelanggan = (idpelanggan) =>{
        const data = qs.stringify({
            id_pelanggan: idpelanggan,
            nama: this.state.nama,
            no_hp: this.state.no_hp,
            alamat: this.state.alamat
        })

        axios.put(api+ '/ubah', data)
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
                <h4>Form Edit Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>No.Hp</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange} placeholder="Masukan Np.HP"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Alamat</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukan Alamat"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>this.ubahPelanggan(this.state.id_pelanggan)}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditPelComp;