import React, { Component } from 'react';
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
//import {Link} from 'react-router-dom'

const api = 'http://localhost:3002'

class TambahPelComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            no_hp: '',
            alamat: '',
            response: '',
            display: 'none'
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    Addpelanggan = () => {
        axios.post(api+'/tambah',{
            nama: this.state.nama,
            no_hp: this.state.no_hp,
            alamat: this.state.alamat
        }).then(json =>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })   
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
                <h4>Form Tambah Data</h4>
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
                    <Label>No.HP</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange} placeholder="Masukan No_hp"/>
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
                                <Button type="button" onClick={this.Addpelanggan}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahPelComp;