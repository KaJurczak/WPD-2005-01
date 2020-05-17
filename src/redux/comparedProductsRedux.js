/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getComparedProduct = ({ comparedProducts }) => comparedProducts.products;

// action name creator
const reducerName = 'comparedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_COMPARING = createActionName('ADD_TO_COMPARING');
export const REMOVE_FROM_COMPARING = createActionName('REMOVE_FROM_COMPARING');

// action creators
export const setProduct = payload => ({ payload, type: ADD_TO_COMPARING });
export const removeProduct = payload => ({ payload, type: REMOVE_FROM_COMPARING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARING: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_FROM_COMPARING: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product !== action.payload),
      };
    }
    default:
      return statePart;
  }
}
