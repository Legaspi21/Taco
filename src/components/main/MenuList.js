'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { MKSpinner } from 'react-native-material-kit';
import axios from 'axios';
import MenuItem from './MenuItem';

class MenuList extends Component {
	state = { tacos: null, loading: true };

	componentWillMount() {
		// Hit the API and receive taco objects
		axios.get('https://taco-api.herokuapp.com/tacos')
			.then(response => this.setState({ tacos: response.data }));
	}

	// Render items or spinner
	renderMenuItem() {
		// If the request has completed and state has received tacos objects..
		// map over and return MenuItem component for each object
		if (this.state.tacos) {
			return (
				this.state.tacos.map(taco =>
					<MenuItem 
					key={taco.title} 
					title={taco.title} 
					description={taco.description} 
					imageSource={taco.uri} 
					/>
				)
			);
		}
		// If request has not completed render a spinner
		return (
			<View style={styles.spinnerViewStyle}>
				<MKSpinner style={styles.spinnerStyle} />
			</View>
		);
	}

  render() {
		console.log(this.state.tacos);
    return (
			<ScrollView>
				{this.renderMenuItem()}
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	spinnerStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 144,
    height: 144
	},
	spinnerViewStyle: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 140
	}
});


export default MenuList;
