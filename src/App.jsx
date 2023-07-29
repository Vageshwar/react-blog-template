import './App.css'
import './styles/typography.css';
import './styles/box.css';
import './styles/flex.css';
import NavBar from './components/nav/NavBar'
import Blog from './pages/Blog';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  // states
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path="*" element={<div>404</div>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
