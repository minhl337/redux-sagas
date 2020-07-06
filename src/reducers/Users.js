import { Types } from '../actions/Users';

const initial_state = {
  items: [],
};

export default function users(state = initial_state, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return action.payload.items;
    default:
      return state;
  }
}
