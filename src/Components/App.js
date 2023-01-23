import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
