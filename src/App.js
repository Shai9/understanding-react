import './App.css';
import ReactLogo from './images/reactlogo.png';

function App() {
  return (
    <div>
    <nav className='nav'>
      <img className="image" src= {ReactLogo} alt="React Image" />
      <ul className='nav-items'>
            <li>About</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
    </nav>
    <div className='container'>
        <h1>Why I love React</h1>
  
      <ul>
        <li>Its a hireable skill</li>
        <li>Used by big companies like facebook</li>
        <li>Its easy to understand</li>
        <li>Its a JavaScript Library</li>
        <li>Used Worldwide by Developers</li>
      </ul>
   

      <footer> <small>Copyright 2022 KeDev.</small> </footer>
    </div>
    
    </div>
  );
}

export default App;
