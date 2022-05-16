import { Routes, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Character from '../Character/Character';
import Episodes from '../Episodes/Episodes';
import Location from '../Location/Location';
import Error404 from '../Error/Error404';
import SinglCard from '../SinglCard/SinglCard';

export default function Main() {

  return (
    <Router>
        <header style={
          {display:'flex', 
          flexDirection:'row',
          padding: '2rem', 
          justifyContent:'space-around', 
          height:'10vh', 
          width:'100%',
          position:'fixed'}
          }>
          <NavLink to="/">Characters</NavLink>
          <NavLink to="/epis">Episodes</NavLink>
          <NavLink to="/locat">Loacations</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Character/>} />
          <Route path={"/char/:charId"} element={<SinglCard/>} />
          <Route path="/epis" element={<Episodes/>} />
          <Route path="/locat" element={<Location/>} />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
  );
}
