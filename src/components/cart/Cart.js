'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { 
  Container, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text, 
  ListItem, 
  Right, 
  Left, 
  Body, 
  Separator,
  Badge,
  H1
} from 'native-base';

import {
  View
} from 'react-native';

import CartItem from './CartItem';

class Cart extends Component {
  state = { checkoutPressed: false }
	onCartPress() {
    Actions.cart();
  }

  onSendPress() {
    console.log('SEND');
  }

  onAccountPress() {
    console.log('ACCOUNT');
  }

  onCheckoutPress() {
    
  }

  calculateTax() {
    const total = this.calculateTotal();
    const totalWithTax = total * 0.0925;

    return totalWithTax.toFixed(2);
  }

  calculateTotalWithTax() {
    const total = this.calculateTotal();
    const tax = this.calculateTax();

    return (parseFloat(total) + parseFloat(tax)).toFixed(2);
  }

  calculateTotal() {
    let total = 0;
    this.props.orders.forEach(order =>
      total += (parseInt(order.quantity, 10) * order.price) / 100
    );
    return total;
  }

  renderOrderStatus() {
    
  }

  renderCartItem() {
    //this.props.orders <--- is array
    // in array -->> price, quantity, title
    if (this.props.orders) {
      return (
        this.props.orders.map(order =>
          <CartItem 
          key={order.title} 
          title={order.title} 
          quantity={order.quantity} 
          price={order.price}
          />
        )
      );
    }
    // If request has not completed render a spinner
    return (
      <Text>No Orders</Text>
    );
  }

  renderGrandTotal() {
    if (this.props.orders) {
      return (
        <View>
          <Separator bordered>
            <Text>Tax</Text>
          </Separator>
          <ListItem>
            <Left>
              <Text>{''}</Text>
            </Left>
            <Body>
              <Text note>* CA Tax 9.25%</Text>
            </Body>
            <Right style={styles.rightStyle}>
              <Text note >{`$${this.calculateTax()}`}</Text>
            </Right>
          </ListItem>
          <Separator bordered>
            <Text>Total</Text>
          </Separator>
          <ListItem>
            <Right>
              <Text note >{`$${this.calculateTotalWithTax()}`}</Text>
            </Right>
          </ListItem>
          <Button block success onPress={this.onCheckoutPress()}>
            <Text>Checkout</Text>
          </Button>
        </View>
        );
    }
    // If request has not completed
    return (
      <Text>No Orders</Text>
    );
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <Left>
                <Text>Item</Text>
            </Left>
            <Body>
                <Text>Quantity</Text>
            </Body>
            <Right>
                    <Text>Total</Text>
            </Right>
          </ListItem>
          {this.renderCartItem()}
          {this.renderGrandTotal()}
        </Content>
        <Footer >
          <FooterTab>
            <Button active onPress={() => this.onCartPress()}>
              <Icon active name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button onPress={() => this.onSendPress()}>
              <Icon name="restaurant" />
              <Text>Menu</Text>
            </Button>
            <Button onPress={() => this.onAccountPress()}>
              <Icon name="people" />
              <Text>Amigos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  rightStyle: {
    marginLeft: -50
  }
};

const mapStateToProps = ({ cart }) => {
  return cart;
};


export default connect(mapStateToProps)(Cart);
