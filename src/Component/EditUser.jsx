import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
//import {Link} from 'react-router-dom'

 const api = "http://localhost:3002"

class EditUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.location.state.id,
            username : this.props.location.state.username,
            email : this.props.location.state.email,
            password : this.props.location.state.password,
            role : this.props.location.state.role,
            tanggal_daftar : this.props.location.state.tanggal_daftar,
            response:'',
            display:'none'
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    ubahUser = (iduser) =>{
        const data = qs.stringify({
            id: iduser,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            tanggal_daftar: this.state.tanggal_daftar
        })

        axios.put(api+ '/ubah/user', data)
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
                <h4>Edit Data User </h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>No</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder="Masukan Id"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Username</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Masukan Username"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan Email"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Password </Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Password "/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Role</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="role" value={this.state.role} onChange={this.handleChange} placeholder="Masukan Role "/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Tanggal Daftar</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="date" name="tanggal_daftar" value={this.state.tanggal_daftar} onChange={this.handleChange} placeholder="Masukan Tanggal Daftar"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>this.ubahUser(this.state.id)}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditUser;