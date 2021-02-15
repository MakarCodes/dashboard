import { v4 as uuidv4 } from 'uuid';

export const initialState: IInitialState = {
  users: [],
  editUser: null,
  isLoading: false,
  error: false,
};

export enum ActionTypes {
  FETCHING_DATA_START = 'FETCHING_DATA_START',
  FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS',
  FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL',
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
  SET_EDITED_USER = 'SET_EDITED_USER',
  EDIT_USER = 'EDIT_USER',
}

export type FetchStartAction = {
  type: 'FETCHING_DATA_START';
};
export type FetchSuccessAction = {
  type: 'FETCHING_DATA_SUCCESS';
  payload: { users: IUser[] };
};
export type FetchFailAction = {
  type: 'FETCHING_DATA_FAIL';
};
export type AddUserAction = {
  type: 'ADD_USER';
  payload: { name: string; email: string };
};
export type RemoveUserAction = {
  type: 'REMOVE_USER';
  payload: { id: string };
};
export type SetEditUserAction = {
  type: 'SET_EDITED_USER';
  payload: { user: IUser };
};
export type EditUserAction = {
  type: 'EDIT_USER';
  payload: { user: IUser };
};

export type Actions =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailAction
  | AddUserAction
  | RemoveUserAction
  | SetEditUserAction
  | EditUserAction;

const usersReducer = (state: IInitialState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCHING_DATA_START:
      return { ...state, isLoading: true };
    case ActionTypes.FETCHING_DATA_SUCCESS:
      return { ...state, isLoading: false, users: action.payload.users };
    case ActionTypes.FETCHING_DATA_FAIL:
      return { ...state, isLoading: false, error: true };
    case ActionTypes.ADD_USER:
      const newUser = {
        id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        username: '',
        city: '',
      };
      const users = state.users;
      users.push(newUser);
      return { ...state, users };
    case ActionTypes.REMOVE_USER:
      const usersAfterRemoval = state.users.filter(
        (user: IUser) => user.id !== action.payload.id
      );
      return { ...state, users: usersAfterRemoval };
    case ActionTypes.SET_EDITED_USER:
      return { ...state, editUser: action.payload.user };
    case ActionTypes.EDIT_USER:
      const updatedUsers = state.users.map((user: IUser) => {
        return user.id === action.payload.user.id ? action.payload.user : user;
      });
      return { ...state, users: updatedUsers, editUser: null };
    default:
      return state;
  }
};

export default usersReducer;
