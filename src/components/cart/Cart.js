'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, ListItem, Right, Left, Body, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import {
  StyleSheet,
} from 'react-native';

import CartItem from './CartItem';

class Cart extends Component {
	onCartPress() {
    Actions.cart();
  }

  onSendPress() {
    console.log('SEND');
  }

  onAccountPress() {
    console.log('ACCOUNT');
  }

  renderCartItem() {
    console.log("-----------------");
    console.log(this.props);
    console.log("-----------------");
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
  calculateTotal() {
    let total = 0;
    this.props.orders.forEach(order =>
      total += (parseInt(order.quantity, 10) * order.price) / 100
    );
    return total;
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

  renderGrandTotal() {
    const grandTotal = this.calculateTotal();
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
            <Right>
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
        </View>
        );
    }
    // If request has not completed render a spinner
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
            <Button onPress={() => this.onCartPress()}>
              <Icon name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button active onPress={() => this.onSendPress()}>
              <Icon active name="paper-plane" />
              <Text>Send</Text>
            </Button>
            <Button onPress={() => this.onAccountPress()}>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = ({ cart }) => {
  return cart;
};


export default connect(mapStateToProps)(Cart);
