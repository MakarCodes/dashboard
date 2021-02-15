import { ActionCreator } from 'redux';
import {
  ActionTypes,
  FetchStartAction,
  FetchSuccessAction,
  FetchFailAction,
  AddUserAction,
  RemoveUserAction,
  EditUserAction,
} from '../reducers/usersReducer';

const fetchUsersStart: ActionCreator<FetchStartAction> = () => ({
  type: ActionTypes.FETCHING_DATA_START,
});
const fetchUsersSuccess: ActionCreator<FetchSuccessAction> = (
  users: IUser[]
) => ({
  type: ActionTypes.FETCHING_DATA_SUCCESS,
  payload: { users },
});
const fetchUsersFail: ActionCreator<FetchFailAction> = () => ({
  type: ActionTypes.FETCHING_DATA_FAIL,
});

export const addUser: ActionCreator<AddUserAction> = (
  name: string,
  email: string
) => ({
  type: ActionTypes.ADD_USER,
  payload: { name, email },
});
export const removeUser: ActionCreator<RemoveUserAction> = (id: string) => ({
  type: ActionTypes.REMOVE_USER,
  payload: { id },
});
export const editUser: ActionCreator<EditUserAction> = (user: IUser) => ({
  type: ActionTypes.EDIT_USER,
  payload: { user },
});

export const fetchUsers = (url: string) => async (
  dispatch: React.Dispatch<any>
) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch(url);
    const users: IUser[] = await response.json();
    console.log(users);
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFail());
  }
};
