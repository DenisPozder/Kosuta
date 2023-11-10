import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Langing/Landing';
import RestaurantHome from './Pages/RestaurantHome/RestaurantHome';
import HallHome from './Pages/HallHome/HallHome';
import RestaurantAbout from './Pages/RestaurantAbout/RestaurantAbout';
import HallAbout from './Pages/HallAbout/HallAbout';
import HallSeminars from './Pages/HallSeminars/HallSeminars';
import HallWeddings from './Pages/HallWeddings/HallWeddings';
import HallBirthdays from './Pages/HallBirthdays/HallBirthdays';
import HallMenu from './Pages/HallMenu/HallMenu';
import Gameroom from './Pages/Gameroom/Gameroom';
import BigHallPage from './Pages/BigHallPage/BigHallPage';
import MediumHallPage from './Pages/MediumHallPage/MediumHallPage';
import SmallHallPage from './Pages/SmallHallPage/SmallHallPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/restoran/početna' element={<RestaurantHome />} />
      <Route path='/restoran/o-nama' element={<RestaurantAbout />} />
      <Route path='/restoran/igraonica' element={<Gameroom />} />
      <Route path='/restoran/jelovnik' element={<RestaurantHome />} />
      <Route path='/restoran/galerija' element={<RestaurantHome />} />
      <Route path='/proslave/početna' element={<HallHome />} />
      <Route path='/proslave/o-nama' element={<HallAbout />} />
      <Route path='/proslave/velika-sala' element={<BigHallPage />} />
      <Route path='/proslave/srednja-sala' element={<MediumHallPage />} />
      <Route path='/proslave/mala-sala' element={<SmallHallPage />} />
      <Route path='/proslave/jelovnik' element={<HallMenu />} />
      <Route path='/proslave/venčanja' element={<HallWeddings />} />
      <Route path='/proslave/seminari' element={<HallSeminars />} />
      <Route path='/proslave/rođendani' element={<HallBirthdays />} />
      <Route path='/proslave/igraonica' element={<Gameroom />} />
      <Route path='/proslave/galerija' element={<HallHome />} />
    </Routes>
  );
}

export default App;
