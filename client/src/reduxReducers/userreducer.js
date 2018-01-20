// function containing object for restaurant state data
const defaultState = {
  name: 'Anonymous',
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_USER':
      console.log("USER CHANGE RAN");
      return Object.assign({}, state, { name: action.payload });
      break;
    default:
      return state;
  }
}
