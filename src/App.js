import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
