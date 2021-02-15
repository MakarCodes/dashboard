import { ActionTypes } from '../reducers/usersReducer';

const fetchUsersStart = () => ({
  type: ActionTypes.FETCHING_DATA_START,
});
const fetchUsersSuccess = (users: IUser[]) => ({
  type: ActionTypes.FETCHING_DATA_SUCCESS,
  payload: { users },
});
const fetchUsersFail = () => ({
  type: ActionTypes.FETCHING_DATA_FAIL,
});

const addUser = (name: string, email: string) => ({
  type: ActionTypes.ADD_USER,
  payload: { name, email },
});
const removeUser = (id: string) => ({
  type: ActionTypes.ADD_USER,
  payload: { id },
});
const editUser = () => (user: IUser) => ({
  type: ActionTypes.ADD_USER,
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
