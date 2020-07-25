import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap';
import axios from 'axios'
const api = 'http://localhost:3002'

export default class RegisterComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            role: '',
            response: '',
            color:'',
            display:'none'
        }
    }

    handleRegisChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    register = () => {
        axios.post(api+'/auth/api/v1/register',{
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }).then(json => {
            if(json.data.status === 200){
                if(json.data.values === 'Berhasil Membuat User'){
                    this.setState({
                        response: json.data.values,
                        color:'success',
                        display: 'block',
                    })
                }
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
            <h4>Form Register</h4>
            <Alert color="success" style={{display: this.state.display}}>
                {this.state.response}
            </Alert>
            <Form className="form">
                <Col>
                <Label>Username</Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="username" value={this.state.username} onChange={this.handleRegisChange} placeholder="Masukan username"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Email</Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="email" value={this.state.email} onChange={this.handleRegisChange} placeholder="Masukan email"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Password</Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="password" value={this.state.password} onChange={this.handleRegisChange} placeholder="Masukan Password"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Role</Label>
                <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="role" value={this.state.role} onChange={this.handleRegisChange} placeholder="Masukan role"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <Button type="button" onClick={this.register}>Submit</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>

        );
    }
}