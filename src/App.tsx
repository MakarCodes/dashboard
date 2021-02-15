import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/actions/usersActionsCreators';

import Layout from './components/Layout/Layout';
import Routes from './components/Routes/Routes';

function App() {
  const state = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchUsers(
        'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
      )
    );
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
