/* Dependencies */
import axios from 'axios';

/* Initial State */
const initialState = {
  dresses: [],
  dressSelected: {}
};

/* Reducer Function */
export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'setDress':
      newState.dressSelected = action.dress
    default:
      return newState;
  }
  return newState;
}


export const setDress = (dress) => ({
  type: "setDress",
  dress
})

export const generateShortUrl = (designer, dressName) => dispatch => {
  axios.post('/api/shorten', {
    designer,
    dressName
  })
    .then(res => res.data)
    .catch(err => console.error(`Shortening url unsuccessful`, err))
}
//
// export const GetTestRobots = () => dispatch => {
//   axios.get(`/api/robots/testRobots`)
//     .then(response => {
//       var robots = response.data
//       socket.emit('setTestRobot', robots)
//       dispatch(GotTestRobots(robots))
//     })
//     .catch(err => console.error(`Getting test robot was unsuccessful`, err))
// }