import { Route, Routes } from 'react-router-dom';
import './App.css';
import RepoDetails from './components/RepoDetails';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
function App() {
  

  return (
    <Routes>
     <Route path="/" element={<Home/>}>
      <Route path='details/:name' element={<RepoDetails/>}/>
     </Route>
     <Route path='*' element={<ErrorPage/>}/>


    </Routes>
  );
}

export default App;
