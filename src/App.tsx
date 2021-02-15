import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/actions/usersActionsCreators';

import Layout from './components/Layout/Layout';

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
    <div>
      <Layout>
        <div>routes</div>
      </Layout>
    </div>
  );
}

export default App;
