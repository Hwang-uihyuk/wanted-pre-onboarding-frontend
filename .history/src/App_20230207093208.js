import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Outlet/>
    </div>
    
  );
}

export default App;
