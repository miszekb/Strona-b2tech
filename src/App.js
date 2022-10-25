import { Route, Routes } from 'react-router-dom';
import PageFooter from './components/PageFooter/PageFooter';
import PageHeader from './components/PageHeader/PageHeader';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return  <>
    <PageHeader/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
    </Routes>;
    <PageFooter/>
  </>

}

export default App;
