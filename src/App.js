import { Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Components/Home';
import Userdata from './Components/Userdata';
import Adduser from './Components/Adduser';

function App() {
  return (
    <div className="App">
       <div className='leftPanel'>
        <Header/>
      </div>
      <div className='rightPanel'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/adduser' element={<Adduser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
