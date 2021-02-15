import { v4 as uuidv4 } from 'uuid';
interface IInitialState {
  users: IUser[];
  editUser: IUser | null;
  isLoading: boolean;
  error: boolean;
}
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
  EDIT_USER = 'EDIT_USER',
}

export type Actions =
  | {
      type: 'FETCHING_DATA_START';
    }
  | {
      type: 'FETCHING_DATA_SUCCESS';
      payload: { users: IUser[] };
    }
  | {
      type: 'FETCHING_DATA_FAIL';
    }
  | {
      type: 'ADD_USER';
      payload: { name: string; email: string };
    }
  | {
      type: 'REMOVE_USER';
      payload: { id: string };
    }
  | {
      type: 'EDIT_USER';
      payload: { user: IUser };
    };

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
    case ActionTypes.EDIT_USER:
      const updatedUsers = state.users.map((user: IUser) => {
        return user.id === action.payload.user.id ? action.payload.user : user;
      });
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
};

export default usersReducer;
