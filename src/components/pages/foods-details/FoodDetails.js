import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';


class FoodDetails extends Component {

    constructor() {
        super()
        this.state = { food: foodsArray[0] }
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>{this.state.food.name}</h1>
                        <img className="food-datail-img" src={`/img/${this.state.food.img}`}></img>
                    </Col>
                    <Col md={8}>
                        <h2>Especificaciones</h2>
                        <p>{this.state.food.description}</p>
                        <hr />
                        <p>Precio: {this.state.food.price}</p>

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
                        </Tabs>
                        <Tabs defaultActiveKey="Origen">
                            <Tab eventKey="Origen" title="Origen">
                                <h3>Origen</h3>
                                <hr />
                                <p>{this.state.food.name} procedente de:</p>
                                <ul>
                                    {this.state.food.origin.map(country => <li>{country}</li>)}
                                </ul>
                            </Tab>
                        </Tabs>
                        <Tabs defaultActiveKey="Stock">
                            <Tab eventKey="Stock" title="Stock">
                                <h3>Stock</h3>
                                <hr />
                                <p>Informacion nutricional por 100g:</p>
                                <ul>
                                    <li>Calorias: {this.state.food.kcal}</li>
                                    <li>Proteinas:{this.state.food.protein}</li>
                                    <li>Grasas:{this.state.food.fat}</li>
                                    <li>Carbohidratos: {this.state.food.carbs}</li>
                                </ul>
                            </Tab>

                    </Col>
                </Row>
            </Container>
        )
    }

}

export default FoodDetails;