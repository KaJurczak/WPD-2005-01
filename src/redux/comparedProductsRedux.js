/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const reducerName = 'comparedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_COMPARING = createActionName('ADD_TO_COMPARING');

// action creators
export const setProduct = payload => ({ payload, type: ADD_TO_COMPARING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARING: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
