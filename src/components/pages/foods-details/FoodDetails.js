import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FoodDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { food: undefined }
    }

    componentDidMount() {

        const id = this.props.match.params.foodId

        fetch(`http://react-webinar.herokuapp.com/${id}`)
            .then(response => response.json())
            .then(foodDetails => this.setState({ food: foodDetails }))

    }

    render() {

        return (
            <Container>

                {
                    this.state.food ?

                        <Row>
                            <Col md={4}>
                                <h1>{this.state.food.name}</h1>
                                <img className="food-detail-img" src={`/img/${this.state.food.img}`}></img>
                            </Col>
                            <Col md={8}>
                                <h2>Especificaciones</h2>
                                <p>{this.state.food.description}</p>
                                <hr />
                                <p>Precio: {this.state.food.price}€</p>

                                <Tabs defaultActiveKey="Nutricional">
                                    <Tab eventKey="Nutricional" title="Nutricional">
                                        <h3>Informacion nutricional</h3>
                                        <hr />
                                        <p>Informacion nutricional por 100g:</p>
                                        <ul>
                                            <li>Calorias: {this.state.food.kcal}</li>
                                            <li>Proteinas:{this.state.food.protein}</li>
                                            <li>Grasas:{this.state.food.fat}</li>
                                            <li>Carbohidratos: {this.state.food.carbs}</li>
                                        </ul>
                                    </Tab>
                                
                                
                                    <Tab eventKey="Origen" title="Origen">
                                        <h3>Origen</h3>
                                        <hr />
                                        <p>{this.state.food.name} procedente de:</p>
                                        <ul>
                                            {this.state.food.origin.map(country => <li>{country}</li>)}
                                        </ul>
                                    </Tab>
                           
                                
                                    <Tab eventKey="Stock" title="Stock">
                                        <h3>Stock</h3>
                                        <hr />
                                        <p>Stock actual: {this.state.food.stock} unidades en stock</p>
                                    </Tab>
                                </Tabs>
                                <Link className="btn btn-sm btn-outline-primary"to="/alimentos">Volver</Link>
                            </Col>
                        </Row>
                        :
                        <p>Cargando...</p>
                }
            </Container>
        )
    }

}

export default FoodDetails;