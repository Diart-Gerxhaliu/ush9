import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
