'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'; 

import MenuList from './MenuList';

class Menu extends Component {
  onCartPress() {
    Actions.cart();
  }

  onMenuPress() {
    Actions.home();
  }

  onAmigosPress() {
    Actions.amigos();
  }
  render() {
    return (
      <Container>
        <Content>
          <MenuList />
        </Content>
      {/*Temporarily rendering Footer here due to breaking change with Flex: https://github.com/facebook/react-native/wiki/Breaking-Changes#fix-unconstraint-sizing-in-main-axis-0a9b6b---emilsjolander*/}
        <Footer >
          <FooterTab>
            <Button onPress={() => this.onCartPress()}>
              <Icon name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button active onPress={() => this.onMenuPress()}>
              <Icon active name="restaurant" />
              <Text>Menu</Text>
            </Button>
            <Button onPress={() => this.onAmigosPress()}>
              <Icon name="people" />
              <Text>Amigos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Menu;
