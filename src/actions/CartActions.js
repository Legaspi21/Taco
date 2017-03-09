import { QUANTITY_CHANGED } from './types';

export const quantityChanged = (text) => {
	return {
		type: QUANTITY_CHANGED,
		payload: text
	};
};
