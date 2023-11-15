import * as pagesAction from '../actions/pages'

export enum EntryState {
  LOGIN,
  REGISTER,
  OTP
}

export interface Pages {
  entry: EntryState
}

const initialPagesState : Pages = {
  entry: EntryState.LOGIN
}

const pagesReducer = (state = initialPagesState, action: any) => {
  switch (action.type) {
    case pagesAction.SET_ENTRY_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export {
  pagesReducer
}