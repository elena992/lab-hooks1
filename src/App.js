import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/misc/Navbar/Navbar';
import Home from './components/misc/Home/Home';
import DetailPage from './components/misc/DetailPage/DetailPage';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path='/posts/:id' element={<DetailPage />} />
        </Routes>
      </div>  
    </div>  
  );
}

export default App;