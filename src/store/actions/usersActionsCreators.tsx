import { ActionCreator } from 'redux';
import {
  ActionTypes,
  FetchStartAction,
  FetchSuccessAction,
  FetchFailAction,
  AddUserAction,
  RemoveUserAction,
  EditUserAction,
  Actions,
  SetEditUserAction,
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
export const setEditedUser: ActionCreator<SetEditUserAction> = (
  user: IUser
) => ({
  type: ActionTypes.SET_EDITED_USER,
  payload: { user },
});
export const editUser: ActionCreator<EditUserAction> = (user: IUser) => ({
  type: ActionTypes.EDIT_USER,
  payload: { user },
});

export const fetchUsers = (url: string) => async (
  dispatch: React.Dispatch<Actions>
) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch(url);
    const users: IFetchData[] = await response.json();
    const usersToSave: IUser[] = users.map(
      ({ id, name, username, email, address }) => ({
        id: id.toString(),
        name,
        username,
        email,
        city: address.city,
      })
    );
    dispatch(fetchUsersSuccess(usersToSave));
  } catch (error) {
    dispatch(fetchUsersFail());
  }
};
