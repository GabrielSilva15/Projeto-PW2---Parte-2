
import './App.css'
import { Home } from './pages/Home/Home';
import { AppRoutes } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
