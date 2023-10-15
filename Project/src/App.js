import './App.css';
import Nav from './Components/nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import PrivateComponent from './Components/PrivateComponent';
import Home from './Components/Home'
function App() {
  return (
      <div className="App">
          <BrowserRouter>
          <Nav/>
          <Routes>  
            
            <Route element = {<PrivateComponent />}>
            <Route path="/Home" element={<Home />}/>
            <Route path="/logout" element={<h1>Logout Component</h1>}/>

            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          </BrowserRouter>
      </div> 
      

  );
}

export default App;