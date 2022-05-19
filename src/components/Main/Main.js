import { Routes, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Character from '../Character/Character';
import Episodes from '../Episodes/Episodes';
import Location from '../Location/Location';
import Error404 from '../Error/Error404';
import SinglCardChar from '../SinglCard/SinglCardChar';
import SinglCardLockal from '../SinglCard/SinglCardLockal';
import SinglCardEpis from '../SinglCard/SinglCardEpis';

export default function Main() {

  return (
    <Router>
        <header style={
          {display:'flex', 
          flexDirection:'row',
          justifyContent:'space-around', 
          height:'70px', 
          textAlign:'center',
          width:'100%',
          position:'fixed'}
          }>
          <NavLink to="/">Characters</NavLink>
          <NavLink to="/epis">Episodes</NavLink>
          <NavLink to="/locat">Loacations</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Character/>} />
          <Route path={"/char/:charId"} element={<SinglCardChar/>} />
          <Route path="/epis" element={<Episodes/>} />
          <Route path={"/epis/:episId"} element={<SinglCardEpis/>}/>
          <Route path="/locat" element={<Location/>} />
          <Route path={"/locat/:locatId"} element={<SinglCardLockal/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
  );
}
