import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }


}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispathToProps = dispatch => {
  return {
    removeFromCart(product) {

      console.log("REMOVE_FROM_CART " + product.name)
      dispatch(removeFromCart(product))


    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
