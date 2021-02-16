import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/actions/usersActionsCreators';

import { USERS_URL } from './constans';

import Layout from './components/Layout/Layout';
import Routes from './components/Routes/Routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(USERS_URL));
  }, []);

  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
