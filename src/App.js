import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about-us';
import CreateYourPlan from './components/createyourplan';

import './App.css';

function App() {
  return (
    <div className='App'>
         <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/createyourplan' element={<CreateYourPlan/>}></Route>
     </Routes>
    </div>
  
  );
}

export default App;
