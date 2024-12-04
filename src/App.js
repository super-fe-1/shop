import { useDispatch } from 'react-redux';
import setToken from './axios/setToken';
import { setLogin } from './redux/modules/user';
import Router from './router/Router';

function App() {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    setToken(accessToken);
    dispatch(setLogin(true));
  }

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
