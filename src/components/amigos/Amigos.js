'use strict';

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
	Item,
	Input

} from 'native-base';

import { ScrollView } from 'react-native';

import AmigosListItem from './AmigosListItem';

const img1 = require('./user_img/0.jpg');
const img2 = require('./user_img/11.jpg');
const img3 = require('./user_img/28.jpg');
const img4 = require('./user_img/3.jpg');
const img5 = require('./user_img/6.jpg');
const img6 = require('./user_img/57.jpg');
const img7 = require('./user_img/68.jpg');
const img8 = require('./user_img/81.jpg');
const img9 = require('./user_img/85.jpg');


const communications = [
{ name: 'Brad Peters', message: 'Thanks for the tacos Nik!', imageSource: img1, time: '3: 43 pm' },
{ name: 'Nik Hill', message: 'Sent Brad Peters a care package', imageSource: img2, time: '3: 40 pm' },
{ name: 'Megan Brand', message: 'Get in my belly!', imageSource: img3, time: '3: 15 pm' },
{ name: 'Austin Combs', message: 'Taco Tuesday!! You know what that means!', imageSource: img4, time: '2: 32 pm' },
{ name: 'Mya Scott', message: 'Studying for finals agh need tacos ASAP!!', imageSource: img5, time: '2:21 pm' },
{ name: 'Alexa Campbell', message: 'I love the Mahi Mahi!', imageSource: img6, time: '2:18 pm' },
{ name: 'Samantha Holt', message: 'Trying to decide between the mango Mahi Mahi and the Lobster..', imageSource: img7, time: '1:38 pm' },
// { name: 'Luke Evans', message: '<- This guy! Meet you in 20 minutes..', imageSource: img8, time: '12:55 pm' },
// { name: 'Ethan Williams', message: 'Anyone up for tacos?', imageSource: img9, time: '12:45 pm' },
	];

class Amigos extends Component {
	onCartPress() {
    Actions.cart();
  }

  onMenuPress() {
    Actions.home();
  }

  onAmigosPress() {
    Actions.amigos();
  }
	
	renderAmigoList() {
		return (
			communications.map((com) => 
					<AmigosListItem 
						key={com.name}
						name={com.name} 
						message={com.message} 
						imageSource={com.imageSource} 
						time={com.time} 
					/>
			)
		);
	}

  render() {
    return (
      <Container>
        <Content>
          {this.renderAmigoList()}
          <Item style={{ position: 'absolute', justifyContent: 'flex-end', marginTop: 500, backgroundColor: '#fff'}}>
            <Icon active name='chatboxes' />
            <Input placeholder='Message Amigos'/>
            <Icon active name='add-circle' />
	        </Item>
        </Content>
        <Footer >
          <FooterTab>
            <Button onPress={() => this.onCartPress()}>
              <Icon active name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button onPress={() => this.onMenuPress()}>
              <Icon name="restaurant" />
              <Text>Menu</Text>
            </Button>
            <Button active onPress={() => this.onAmigosPress()}>
              <Icon active name="people" />
              <Text>Amigos</Text>
            </Button>
          </FooterTab>
        </Footer>
			</Container>
    );
  }
}

export default Amigos;
