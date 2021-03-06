// create a reducer function that can be attached in the reducer state tree
export default function (state = {}, action) {
  switch(action.type) {
    case 'f1-sticky/SCROLL':
    case 'f1-sticky/RESIZE':
      return {...state, [action.meta.name]: {...state[action.meta.name], ...action.payload}}
  }
  return state
}
