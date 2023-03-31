import { useContext } from 'react';
import './App.css';
import Earn from './Components/Earn/Earn';
import Footer from './Components/Footer/Footer';
import Intro from './Components/intro/intro';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';
import { themeContext } from './Context';

function App() {
  const theme= useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className='App'
    style={{
      background:darkmode?'black':'#FBF8F5',
      color:darkmode? 'white':''
    }}
    >
      <Navbar/>
      <Intro/>
      <br />
      <br />
      <Earn/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
