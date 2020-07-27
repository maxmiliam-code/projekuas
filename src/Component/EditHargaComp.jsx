import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
//import {Link} from 'react-router-dom'

 const api = "http://localhost:3002"

class EditHargaComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_harga : this.props.location.state.id_harga,
            harga : this.props.location.state.harga,
            response:'',
            display:'none'
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    ubahharga = (idharga) =>{
        const data = qs.stringify({
            id_harga: idharga,
            harga: this.state.harga
        })

        axios.put(api+ '/ubah/harga', data)
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
                    <Label>Harga</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Nama"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>this.ubahharga(this.state.id_harga)}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditHargaComp;