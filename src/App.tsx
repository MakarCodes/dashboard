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

  useEffect(() => {
    const sendData = (data: any, url: string) => {
      fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', // tells the API if the data you sent is JSON or a query string
        },
        body: JSON.stringify(data), //  the data
      })
        .then(response => {
          response.json();
          // if (!response.ok) {
          //   //ERROR HANDLING
          //   console.log('Error:', response);
          // } else {
          //   // GET - FETCH
          //   console.log('Success:', response);
          // }
        })
        // .then(data => {
        //   console.log('Success:', data);
        // })
        .catch(error => {
          console.error('Error:', error);
        });
    };
    const a = { test: 1 };
    sendData(a, 'https://jsonplaceholder.typicode.com/posts4');
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
