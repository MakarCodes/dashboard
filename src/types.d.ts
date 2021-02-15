interface IUser {
  id: string;
  name: string;
  username: string;
  city: string;
  email: string;
}

interface IInitialState {
  users: IUser[];
  editUser: IUser | null;
  isLoading: boolean;
  error: boolean;
}
