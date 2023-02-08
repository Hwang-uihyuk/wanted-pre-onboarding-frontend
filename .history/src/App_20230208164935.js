import logo from './logo.svg';
import './App.css';
import './index.css'
import SignIn from './pages/SignUp';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Outlet/>
    </div>
    
  );
}

export default App;
