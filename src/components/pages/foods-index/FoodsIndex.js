import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';

import { Link } from 'react-router-dom';


class FoodsIndex extends Component {

    constructor() {
        super()
        this.state = { foods: undefined }
    }

    componentDidMount() {

        fetch('http://react-webinar.herokuapp.com/')
            .then(response => response.json())
            .then(foodsArray => this.setState({ foods: foodsArray }))

    }


    render() {
        return (
            <Container>
                <h1>Listado de Alimentos</h1>

                {this.state.foods ?

                    <Table bordered>
                        <tbody>
                            {this.state.foods.map(food =>
                                <tr>
                                    <td> <img src={`/img/${food.img}`}  alt={food.name} /> </td>
                                    <td> <p>{food.name}</p> </td>
                                    <td> <p><small>Precio: {food.price}€ | Stock: {food.stock} uds. | Kcal: {food.kcal}/100g</small></p> </td>
                                    <td> <Link className="btn btn-sm btn-outline-primary" to={`/detalles/${food._id}`}>Detalles</Link> </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    :
                    <p>Cargando...</p>
                }
            </Container>
        )
    }
}

export default FoodsIndex;