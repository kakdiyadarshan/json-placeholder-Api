import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Ablums from './component/Ablums';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/ablums' element={<Ablums />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
