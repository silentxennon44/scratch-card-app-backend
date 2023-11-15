import * as userAction from '../actions/user'

interface User {
  id: number
  name: string
  username: string
  password: string
  user_level: string
  status: "active" | "inactive" | ''
  is_new: boolean | ''
  google_secret: string
}

const initialUser : User = {
  id: 0,
  name: '',
  username: '',
  password: '',
  user_level: '',
  status: '',
  is_new: '',
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