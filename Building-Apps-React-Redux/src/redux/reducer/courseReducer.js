import ActionTypes from "../actions/actions.type";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
