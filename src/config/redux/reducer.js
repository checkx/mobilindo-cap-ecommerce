import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_ITEM } from './action';

const INITIAL_STATE = {
  data: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.value]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        data: state.data.filter(item => item !== action.value)
      };

    case CHANGE_QUANTITY_ITEM:
      return {
        ...state,
        data: state.data.map(content =>
          content.id === action.id
            ? { ...content, quantity: action.value }
            : content
        )
      };

    default:
      return state;
  }
};

export default reducer;