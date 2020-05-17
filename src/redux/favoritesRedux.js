/* selectors */
export const getFavoriteById = ({ favorites }, id) =>
  favorites.filter(item => item === id).length;

/* action name creator */
const reducerName = 'favorites';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE = createActionName('SET_FAVORITE');

/* action creators */
export const setFavorite = payload => ({ ...payload, type: SET_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE: {
      if (statePart.indexOf(action.id) < 0) return [...statePart, action.id];
      return [...statePart.filter(id => id !== action.id)];
    }
    default:
      return statePart;
  }
}
