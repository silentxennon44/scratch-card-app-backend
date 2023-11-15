import * as userAction from '../actions/user'

export interface User {
  id: number
  name: string
  username: string
  password: string
  user_level: string
  status: Nullable<"active" | "inactive">
  is_new: Nullable<Boolean>
  google_secret: string
}

const initialUser : User = {
  id: 0,
  name: '',
  username: '',
  password: '',
  user_level: '',
  status: null,
  is_new: null,
  google_secret: '',
}

const userReducer = (state = initialUser, action: any) => {
  switch (action.type) {
    case userAction.SET_USER:
      return Object.assign({}, state, action.payload.user);
    default:
      return state
  }
}

export {
  userReducer
}