import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Character from '../Character/Character';

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
        <Link to="/">Characters</Link>
        <Link to="/epis">Episodes</Link>
        <Link to="/locat">Loacations</Link>
      </header>
      <Routes>
        <Route path="/" element={<Character/>} />
      </Routes>
    </Router>
  );
}
