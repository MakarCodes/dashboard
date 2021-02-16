import { v4 as uuidv4 } from 'uuid';
import { updateObject } from '../../utilities/updateObject';

export const initialState: IInitialState = {
  users: [],
  editUser: null,
  userForRemoval: null,
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
  SET_USER_TO_REMOVE = 'SET_USER_TO_REMOVE',
  SORT_USERS = 'SORT_USERS',
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
export type SetUserToRemoveAction = {
  type: 'SET_USER_TO_REMOVE';
  payload: { user: IUser };
};
export type SortUsersAction = {
  type: 'SORT_USERS';
};

export type Actions =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailAction
  | AddUserAction
  | RemoveUserAction
  | SetEditUserAction
  | EditUserAction
  | SetUserToRemoveAction
  | SortUsersAction;

const fetchUsersStart = (state: IInitialState, action: FetchStartAction) => {
  return updateObject(state, {
    isLoading: true,
  });
};
const fetchUsersSuccess = (
  state: IInitialState,
  action: FetchSuccessAction
) => {
  return updateObject(state, {
    isLoading: false,
    users: action.payload.users,
  });
};
const fetchUsersFail = (state: IInitialState, action: FetchFailAction) => {
  return updateObject(state, {
    isLoading: false,
    error: true,
  });
};
const addUser = (state: IInitialState, action: AddUserAction) => {
  const newUser = {
    id: uuidv4(),
    name: action.payload.name,
    email: action.payload.email,
    username: '',
    city: '',
  };
  const users = state.users;
  users.push(newUser);
  return updateObject(state, {
    users,
  });
};
const setUserToRemove = (
  state: IInitialState,
  action: SetUserToRemoveAction
) => {
  return updateObject(state, {
    userForRemoval: action.payload.user,
  });
};
const removeUser = (state: IInitialState, action: RemoveUserAction) => {
  const usersAfterRemoval = state.users.filter(
    (user: IUser) => user.id !== action.payload.id
  );
  return updateObject(state, {
    users: usersAfterRemoval,
    userForRemoval: null,
  });
};
const setEditedUser = (state: IInitialState, action: SetEditUserAction) => {
  return updateObject(state, {
    editUser: action.payload.user,
  });
};
const editUser = (state: IInitialState, action: EditUserAction) => {
  const updatedUsers = state.users.map((user: IUser) => {
    return user.id === action.payload.user.id ? action.payload.user : user;
  });
  return updateObject(state, {
    users: updatedUsers,
    editUser: null,
  });
};

const sortUsers = (state: IInitialState, action: SortUsersAction) => {
  const sortUsers = [...state.users];
  sortUsers.sort((a, b) => a.username.localeCompare(b.username));
  return updateObject(state, {
    users: sortUsers,
  });
};

const usersReducer = (state: IInitialState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCHING_DATA_START:
      return fetchUsersStart(state, action);
    case ActionTypes.FETCHING_DATA_SUCCESS:
      return fetchUsersSuccess(state, action);
    case ActionTypes.FETCHING_DATA_FAIL:
      return fetchUsersFail(state, action);
    case ActionTypes.ADD_USER:
      return addUser(state, action);
    case ActionTypes.SET_USER_TO_REMOVE:
      return setUserToRemove(state, action);
    case ActionTypes.REMOVE_USER:
      return removeUser(state, action);
    case ActionTypes.SET_EDITED_USER:
      return setEditedUser(state, action);
    case ActionTypes.EDIT_USER:
      return editUser(state, action);
    case ActionTypes.SORT_USERS:
      return sortUsers(state, action);
    default:
      return state;
  }
};

export default usersReducer;
