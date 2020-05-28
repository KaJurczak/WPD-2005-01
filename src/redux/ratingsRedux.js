/* selectors */
export const getRating = ({ ratings }, id) => ratings.filter(item => item.id === id);

/* action name creator */
const reducerName = 'ratings';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_RATINGS = createActionName('SET_RATINGS');

/* action creators */
export const setRatings = payload => ({ ...payload, type: SET_RATINGS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_RATINGS: {
      const product = statePart.filter(item => item.id === action.id);
      if (!product.length) {
        return [...statePart, { id: action.id, rate: action.rate }];
      } else {
        statePart[statePart.indexOf(product[0])].rate = action.rate;
        return [...statePart];
      }
    }
    default:
      return statePart;
  }
}
