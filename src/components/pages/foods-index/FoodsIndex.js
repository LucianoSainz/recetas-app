import React, {Component} from 'react';
import {Container, Table} from 'react-bootstrap'; 




class FoodsIndex extends Component {

  constructor(){
      this.state = {foods: foodsArray}
  }


    render(){
        return (
            <Container>
            <h1>Listado de Alimentos</h1>

            <Table>
            {this.state.foods.map(food => <tr>
                <td><img src={`/img/${food.img}`} alt={food.name}></img></td>
                <td><p>{food.name}</p></td>    
                <td><p>Precio: {food.price} | Stock: {food.stock} | Kcal: {food.Kcal}</p></td>
                <td><a href="/detalles">Detalles</a></td>
                </tr>)}

                </Table>
            </Container>
        )
    }
}

export default FoodsIndex;