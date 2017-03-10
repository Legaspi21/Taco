import { QUANTITY_CHANGED } from '../actions/types';

const INITIAL_STATE = {
	orders: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QUANTITY_CHANGED:
			const { title, price, quantity, id } = action.payload;
			return { orders: [...state.orders, { title, price, quantity } ] };

		default:
			return state;
	}
};
