import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


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
                </Row>
            </Container>
        )
    }

}

export default FoodDetails;